import { createSlice } from "@reduxjs/toolkit";

export const walletSlice = createSlice({
  name: "walletAddress",
  initialState: {
    walletAddress: "",
  },
  reducers: {
    setWalletAddress: (state, action) => {
      state.walletAddress = action.payload;
    },
  },
});

export const { setWalletAddress } = walletSlice.actions;

export default walletSlice.reducer;
