import { configureStore } from "@reduxjs/toolkit";
import blockSlice from "./blockSlice";
import walletReducer from "./walletSlice";

export default configureStore({
  reducer: {
    wallet: walletReducer,
    block:blockSlice
  },
});
