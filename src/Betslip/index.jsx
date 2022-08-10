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

export function createData(sport, league, event, bet, cf) {
  return { sport, league, event, bet, cf };
}

function DenseTable({ lang }) {
  const { betGames } = useContext(GameContext);
  console.log(betGames);
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "90%",
        mt: 2,
        borderRadius: "0",
        boxShadow: "none",
        borderBottom: "1px solid #c7c7c7",
      }}
    >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">{BETSLIP_DATA.headSport[lang]}</TableCell>
            <TableCell align="center">
              {BETSLIP_DATA.headLeague[lang]}
            </TableCell>
            <TableCell align="center">{BETSLIP_DATA.headEvent[lang]}</TableCell>
            <TableCell align="center">{BETSLIP_DATA.headBet[lang]}</TableCell>
            <TableCell align="center">{BETSLIP_DATA.headCf[lang]}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {betGames.map((row) => (
            <TableRow
              key={row.event}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className="table_row"
            >
              <TableCell component="th" scope="row" align="center">
                {row.sport}
              </TableCell>
              <TableCell align="center">{row.league}</TableCell>
              <TableCell align="center">{row.event}</TableCell>
              <TableCell align="center">{row.bet}</TableCell>
              <TableCell align="center">{row.cf}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export const Betslip = ({ lang }) => {
  return (
    <div className="betslip_wrapper">
      <DenseTable lang={lang} />
    </div>
  );
};
