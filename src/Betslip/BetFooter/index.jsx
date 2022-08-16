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
        <p className="total_head">{BETSLIP_DATA.footerTotal[lang]}</p>
        <p className="footer_info">{totalCf.toFixed(3)}</p>
      </div>
      <div className="total_Cf">
        <p className="total_head">{BETSLIP_DATA.footerDate[lang]}</p>
        <p className="footer_info">{date}</p>
      </div>
      <div className="total_Cf">
        <p className="total_head">{BETSLIP_DATA.footerTime[lang]}</p>
        <p className="footer_info">
          {isTime} | {BETSLIP_DATA.footerZone[lang]}{" "}
        </p>
      </div>
    </div>
  );
};
