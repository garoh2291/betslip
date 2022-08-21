import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./styles.css";
import { BETSLIP_DATA } from "../data";
import { GameContext } from "../context";
import mainImg from "../assets/logo.png";
import { BetFooter } from "./BetFooter";
import { BetBody } from "./BetBody";

export function createData(sport, league, event, bet, cf) {
  return { sport, league, event, bet, cf };
}

function DenseTable({ lang, isSlipActive, editModalOpenHandler }) {
  const { betGames } = useContext(GameContext);
  console.log(betGames);
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "90%",
        mt: 2,
        mb: 2,
        borderRadius: "0",
        boxShadow: "none",
        borderBottom: "1px solid #c7c7c7",
        overflow: "hidden",
      }}
    >
      <Table
        size="small"
        aria-label="a dense table"
        sx={{ overflow: "hidden" }}
      >
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: "600" }}>
              {BETSLIP_DATA.headSport[lang]}
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "600" }}>
              {BETSLIP_DATA.headLeague[lang]}
            </TableCell>
            <TableCell sx={{ fontWeight: "600", minWidth: 260 }} align="center">
              {BETSLIP_DATA.headEvent[lang]}
            </TableCell>
            <TableCell sx={{ fontWeight: "600", minWidth: 150 }} align="center">
              {BETSLIP_DATA.headBet[lang]}
            </TableCell>
            <TableCell sx={{ fontWeight: "600", minWidth: 150 }} align="center">
              {BETSLIP_DATA.headCf[lang]}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {betGames.map((row) => (
            <BetBody
              key={row.id}
              isSlipActive={isSlipActive}
              lang={lang}
              row={row}
              editModalOpenHandler={editModalOpenHandler}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export const Betslip = ({
  lang,
  isDate,
  isTime,
  isSlipActive,
  editModalOpenHandler,
}) => {
  const { betGames } = useContext(GameContext);

  function logoPos(games) {
    if (games.length > 2) {
      if (games.length === 3) {
        return "23px";
      } else if (games.length === 4) {
        return "46px";
      } else {
        return `${games.length * 11.5}px`;
      }
    }
    return "0px";
  }
  return (
    <div className="betslip_wrapper" id="my-node">
      <div
        className="betslip_image"
        style={{ top: `calc(40px + ${logoPos(betGames)} )` }}
      >
        {" "}
        <img src={mainImg} alt="some" />
      </div>
      <DenseTable
        lang={lang}
        isSlipActive={isSlipActive}
        editModalOpenHandler={editModalOpenHandler}
      />
      <BetFooter isDate={isDate} isTime={isTime} lang={lang} />
    </div>
  );
};
