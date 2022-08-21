import { DeleteTwoTone, EditTwoTone } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import React, { useContext } from "react";
import { GameContext } from "../../context";
import { sportType } from "../../helpers";
import "./styles.css";

export const BetBody = ({ isSlipActive, lang, row, editModalOpenHandler }) => {
  const { setBetGames } = useContext(GameContext);
  const { id } = row;
  console.log(id);
  const deleteRow = () => {
    setBetGames((prev) => {
      return prev.filter((game) => game.id !== id);
    });
  };
  return (
    <TableRow
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      className="table_row"
    >
      <TableCell component="th" scope="row" align="center">
        {sportType(row.sport)}
      </TableCell>
      <TableCell align="center">{row.league[lang]}</TableCell>
      <TableCell align="center">
        <div className="event_teams">
          <span>{row.team1[lang]}</span>
          <span>{row.team2[lang]}</span>
        </div>
      </TableCell>
      <TableCell
        align="center"
        sx={{ color: "#0F7B0F", fontWeight: "600", fontSize: "11px" }}
      >
        {isSlipActive && row.bet[lang]}
      </TableCell>
      <TableCell align="center">
        {isSlipActive && row.cf.toFixed(2)}{" "}
        <button className="delete_button" onClick={deleteRow}>
          <DeleteTwoTone style={{ height: 20, width: 20 }} />
        </button>
        <button
          className="change_button"
          onClick={() => editModalOpenHandler(row)}
        >
          <EditTwoTone style={{ height: 20, width: 20 }} />
        </button>
      </TableCell>
    </TableRow>
  );
};
