import { TableCell, TableRow } from "@mui/material";
import * as moment from "moment";
import React from "react";
import "./styles.css";

export const TableGames = ({ row }) => {
  const events = JSON.parse(row.title);
  const totalCf = events.reduce((sum, game) => {
    return (sum *= game.cf);
  }, 1);

  return (
    <TableRow
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      className="table_row"
    >
      <TableCell component="th" scope="row" align="center">
        {moment(row.created_at).format("DD-MM-YYYY")}
      </TableCell>
      <TableCell
        align="center"
        sx={{ color: "#0F7B0F", fontWeight: "600", fontSize: "11px" }}
      >
        {events.map((match) => (
          <p key={match.id}>
            <p>{`${match.sport} | ${match.league.en}`}</p>
            <p>{`${match.team1.en} | ${match.team2.en} | ${match.bet.en}`}</p>
          </p>
        ))}
      </TableCell>
      <TableCell align="center">{totalCf.toFixed(3)}</TableCell>
      <TableCell align="center">{row.description}</TableCell>
    </TableRow>
  );
};
