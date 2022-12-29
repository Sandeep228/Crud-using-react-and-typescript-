import { createSlice } from "@reduxjs/toolkit";
import {
  initialState,
  editinital,
} from "../core/constants/INITIAL_STORE_VALUES";

const dataSlice = createSlice({
  name: "player",
  initialState: { val: initialState, editplayer: editinital },
  reducers: {
    add: (state, action) => {
      state.val = [...state.val, action.payload];
    },
    deleteItem: (state, action) => {
      state.val = state.val.filter((player) => player.id !== action.payload);
      return state;
    },
    EditPlayerDataRequest: (state, action) => {
      state.editplayer = action.payload;
    },
    EditPlayerRequest: (state, action) => {
      state.val.map((value) => {
        if (action.payload.id === value.id) {
          value.name = action.payload.name;
          value.gender = action.payload.gender;
          value.country = action.payload.country;
          value.matches = action.payload.matches;
          value.runs = action.payload.runs;
          value.roles = action.payload.roles;
          value.wickets = action.payload.wickets;
          value.centuries = action.payload.centuries;
          value.fifties = action.payload.fifties;
          value.fours = action.payload.fours;
          value.sixes = action.payload.sixes;
          value.imgURL = action.payload.imgURL;
        }
        return value;
      });
      state.editplayer = editinital;
      return state;
    },
    EditCancel: (state) => {
      state.editplayer = editinital;
      return state;
    },
  },
});

export const {
  add,
  deleteItem,
  EditPlayerDataRequest,
  EditPlayerRequest,
  EditCancel,
} = dataSlice.actions;

export default dataSlice.reducer;
