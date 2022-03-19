import { createSlice } from "@reduxjs/toolkit";

export const blockNumber = createSlice({
  name: "blockNumber",
  initialState: {
    blockNumber: "",
  },
  reducers: {
    setBlockNumbers: (state, action) => {
      state.blockNumber = action.payload;
    },
  },
});

export const { setBlockNumbers } = blockNumber.actions;

export default blockNumber.reducer;
