import "./App.css";
import * as React from "react";
import { Betslip } from "./Betslip";
import { useState, useContext } from "react";
import { BetForm } from "./BetForm";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { EditModal } from "./EditModal";
import { useCallback } from "react";
import { GameContext } from "./context/index";
import { useEffect } from "react";

function App() {
  const [language, setLanguage] = useState("arm");
  const [isBetslipOpen, setBetslipOpen] = useState(false);
  const [isSlipActive, setIsSlipPromoActive] = useState(false);
  const [isDate, setIsDate] = useState("");
  const [isTime, setIsTime] = useState("");
  const { betGames } = useContext(GameContext);

  const setBetslipLanguage = (lang) => {
    setLanguage(lang);
  };

  const setBetSlipOpenHandler = (data) => {
    setBetslipOpen(data);
  };

  function toBackend() {
    const stringedGames = JSON.stringify(betGames);
    fetch("http://localhost:3001/task", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ title: stringedGames }),
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
        console.log(game);
      });
  });

  return (
    <div className="App">
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

      <button onClick={downloadHandler.bind(this)}>Download</button>
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
}

export default App;
