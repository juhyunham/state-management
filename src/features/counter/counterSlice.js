import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIncrement = createAsyncThunk(
  "counter/fetchIncrement",

  async (value) => {
    const response = await axios.put("/counter/increment", { value: value });
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementMyAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [fetchIncrement.fullfilled]: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { increment, decrement, incrementMyAmount } = counterSlice.actions;

export default counterSlice.reducer;
