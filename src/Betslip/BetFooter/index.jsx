import React, { useContext } from "react";
import { GameContext } from "../../context";
import { BETSLIP_DATA, MONTHS } from "../../data";
import "./styles.css";

export const BetFooter = ({ isTime, isDate, lang }) => {
  const { betGames } = useContext(GameContext);
  console.log(betGames);

  const totalCf = betGames.reduce((sum, game) => {
    return (sum *= game.cf);
  }, 1);

  const month = `${isDate[3]}${isDate[4]}`;
  const date = `${isDate[0]}${isDate[1]} ${MONTHS[month][lang]} ${isDate[6]}${isDate[7]}${isDate[8]}${isDate[9]}`;

  return (
    <div className="bet_footer">
      <div className="total_Cf">
        <span className="total_head">{BETSLIP_DATA.footerTotal[lang]}</span>
        <span>{totalCf.toFixed(3)}</span>
      </div>
      <div className="total_Cf">
        <span className="total_head">{BETSLIP_DATA.footerDate[lang]}</span>
        <span>{date}</span>
      </div>
      <div className="total_Cf">
        <span className="total_head">{BETSLIP_DATA.footerTime[lang]}</span>
        <span>
          {isTime} | {BETSLIP_DATA.footerZone[lang]}{" "}
        </span>
      </div>
    </div>
  );
};
