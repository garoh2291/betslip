import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "history";

export const getAllGamesThunk = createAsyncThunk(
  "games/getAllGamesThunk",
  function (_, { dispatch, rejectWithValue }) {
    fetch("https://betting-api.herokuapp.com/task")
      .then((res) => res.json())
      .then((data) => dispatch(setGames({ data })));
  }
);

const gameSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
  },
  reducers: {
    setGames(state, action) {
      const gamesFromBackend = action.payload.data;
      return {
        ...state,
        games: gamesFromBackend,
      };
    },
  },
});

const { setGames } = gameSlice.actions;

export default gameSlice.reducer;
