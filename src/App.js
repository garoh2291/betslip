import "./App.css";
import * as React from "react";
import { Betslip } from "./Betslip";
import { GameContextProvider } from "./context/providers";
import { useState } from "react";
import { BetForm } from "./BetForm";

function App() {
  const [language, setLanguage] = useState("arm");
  const [isBetslipOpen, setBetslipOpen] = useState(false);

  const setBetSlipOpenHandler = (lang) => {
    setBetslipOpen(true);
    setLanguage(lang);
  };

  return (
    <GameContextProvider>
      <div className="App">
        <BetForm
          setBetSlipOpenHandler={setBetSlipOpenHandler}
          language={language}
        />
        {isBetslipOpen && <Betslip lang={language} />}
      </div>
    </GameContextProvider>
  );
}

export default App;
