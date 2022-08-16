import "./App.css";
import * as React from "react";
import { Betslip } from "./Betslip";
import { GameContextProvider } from "./context/providers";
import { useState } from "react";
import { BetForm } from "./BetForm";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

function App() {
  const [language, setLanguage] = useState("arm");
  const [isBetslipOpen, setBetslipOpen] = useState(false);
  const [isSlipActive, setIsSlipPromoActive] = useState(false);
  const [isDate, setIsDate] = useState("");
  const [isTime, setIsTime] = useState("");

  const setBetslipLanguage = (lang) => {
    setLanguage(lang);
  };

  const setBetSlipOpenHandler = (data) => {
    setBetslipOpen(data);
  };

  ///
  const downloadHandler = (event) => {
    event.preventDefault();
    domtoimage
      .toBlob(document.getElementById("my-node1"))
      .then(function (blob) {
        saveAs(blob, "myImage.png");
      });
  };
  ///

  return (
    <GameContextProvider>
      <div className="App">
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
              isSlipActive={isSlipActive}
              lang={language}
              isDate={isDate}
              isTime={isTime}
            />
          )}
        </div>
      </div>
    </GameContextProvider>
  );
}

export default App;
