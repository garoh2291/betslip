import { useState } from "react";
import { GameContext } from "..";
import { createData } from "../../Betslip";

export const GameContextProvider = ({ children }) => {
  const [betGames, setBetGames] = useState("");

  return (
    <GameContext.Provider value={{ betGames, setBetGames }}>
      {children}
    </GameContext.Provider>
  );
};
