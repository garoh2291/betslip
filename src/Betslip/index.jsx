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
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { BetFooter } from "./BetFooter";
import { capitalize, sportType } from "../helpers";

export function createData(sport, league, event, bet, cf) {
  return { sport, league, event, bet, cf };
}

function DenseTable({ lang }) {
  const { betGames } = useContext(GameContext);
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
            <TableCell sx={{ fontWeight: "600" }} align="center">
              {BETSLIP_DATA.headCf[lang]}
            </TableCell>
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
                {sportType(row.sport)}
              </TableCell>
              <TableCell align="center">{row.league}</TableCell>
              <TableCell align="center">
                <div className="event_teams">
                  <div className="event_span_left">
                    <div>{row.team1}</div>{" "}
                  </div>
                  <div className="event_span_line">
                    {" "}
                    <HorizontalRuleIcon
                      sx={{ ml: 1, mr: 1, color: "#A20A1B" }}
                    />
                  </div>
                  <div className="event_span_right">
                    <div>{row.team2}</div>{" "}
                  </div>{" "}
                </div>
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "#0F7B0F", fontWeight: "600", fontSize: "11px" }}
              >
                {row.bet}
              </TableCell>
              <TableCell align="center">{row.cf.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export const Betslip = ({ lang, isDate, isTime }) => {
  return (
    <div className="betslip_wrapper" id="my-node">
      <div className="betslip_image">
        {" "}
        <img src={mainImg} alt="some" />
      </div>
      <DenseTable lang={lang} />
      <BetFooter isDate={isDate} isTime={isTime} lang={lang} />
    </div>
  );
};
