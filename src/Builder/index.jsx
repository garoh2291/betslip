import React from "react";
import "./styles.css";
import { Betslip } from "../Betslip";
import { useState, useContext } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { useCallback } from "react";
import { useEffect } from "react";
import { GameContext } from "../context";
import { EditModal } from "../EditModal";
import { BetForm } from "../BetForm";
import { Button } from "antd";
import { Input } from "reactstrap";

export const Builder = () => {
  const [language, setLanguage] = useState("arm");
  const [isBetslipOpen, setBetslipOpen] = useState(false);
  const [isSlipActive, setIsSlipPromoActive] = useState(false);
  const [isDate, setIsDate] = useState("");
  const [isTime, setIsTime] = useState("");
  const [riskCf, setRiskCf] = useState("");
  const { betGames } = useContext(GameContext);

  const setBetslipLanguage = (lang) => {
    setLanguage(lang);
  };

  const setBetSlipOpenHandler = (data) => {
    setBetslipOpen(data);
  };

  const changeRiskHandle = (e) => {
    setRiskCf(e.target.value);
  };

  function toBackend() {
    const totalCf = betGames.reduce((sum, game) => {
      return (sum *= game.cf);
    }, 1);
    const risk =
      ((parseFloat(totalCf) * parseFloat(riskCf)) / 100 - 1) /
        (parseFloat(totalCf) - 1) >
      0.4
        ? "yes"
        : "no";

    const stringedGames = JSON.stringify(betGames);
    fetch("https://betting-api.herokuapp.com/task", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ title: stringedGames, description: risk }),
    });
  }

  ///
  const downloadHandler = (event) => {
    event.preventDefault();
    domtoimage
      .toBlob(document.getElementById("my-node1"))
      .then(function (blob) {
        saveAs(blob, "myImage.png");
        toBackend();
      });
  };
  ///

  //EditGames
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editModalGame, setEditModalGame] = useState(null);

  const editModalOpenHandler = useCallback(
    (game) => {
      if (isEditOpen) {
        setIsEditOpen(false);
        setEditModalGame(null);
      } else {
        setIsEditOpen(true);
        setEditModalGame(game);
      }
    },
    [isEditOpen]
  );

  useEffect(() => {
    fetch("http://localhost:3001/task")
      .then((res) => res.json())
      .then((data) => {
        const game = JSON.parse(data[0].title);
      });
  });
  return (
    <div className="check_builder_main">
      {" "}
      {isEditOpen && (
        <EditModal
          onClose={() => setIsEditOpen(false)}
          editGame={editModalGame}
        />
      )}
      <BetForm
        setBetSlipOpenHandler={setBetSlipOpenHandler}
        setBetslipLanguage={setBetslipLanguage}
        language={language}
        setIsDate={setIsDate}
        setIsTime={setIsTime}
        setIsSlipPromoActive={setIsSlipPromoActive}
        isSlipActive={isSlipActive}
      />
      <div>
        <Input
          name="cf"
          placeholder="Risk %"
          min={1}
          max={100}
          style={{ width: "25%" }}
          type={"number"}
          onChange={changeRiskHandle}
          required
        />
        <Button onClick={downloadHandler.bind(this)}>Download</Button>
      </div>
      <div className="betslip_main" id="my-node1">
        {isBetslipOpen && (
          <Betslip
            editModalOpenHandler={editModalOpenHandler}
            isSlipActive={isSlipActive}
            lang={language}
            isDate={isDate}
            isTime={isTime}
          />
        )}
      </div>
    </div>
  );
};
