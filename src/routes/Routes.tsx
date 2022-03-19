import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import SelectChain from "../screens/SelectChain";
import TransactionHistory from "../screens/TransactionHistory";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/selectType" element={<SelectChain />} />
      <Route
        path="/transactionHistory/:type"
        element={<TransactionHistory />}
      />
    </Routes>
  );
}

export default Router;
