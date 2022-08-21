import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../Redux/gameSlice";
import { TableGames } from "./TableGames";

export const Statistics = () => {
  const { games } = useSelector((state) => state.games);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGamesThunk());
  }, [dispatch]);

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
        padding: "1px",
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
              "Date"
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "600", minWidth: 150 }}>
              "event"
            </TableCell>
            <TableCell sx={{ fontWeight: "600" }} align="center">
              "total CF"
            </TableCell>
            <TableCell sx={{ fontWeight: "600" }} align="center">
              "Risk"
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map((row) => (
            <TableGames key={row._id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
