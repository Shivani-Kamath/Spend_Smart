import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDashboard from "./Components/Dashboard/UserDashboard";
import TranscationHistory from "./Components/TransactionHistory/TranscationHistory";
import PaymentTransfer from "./Components/Payment/PaymentTransfer";
import MyBanks from "./Components/MyBanks/MyBanks";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<UserDashboard />} />
        <Route path="transaction-history" element={<TranscationHistory />} />
        <Route path="payment-transfer" element={<PaymentTransfer/>} />
        <Route path="my-banks" element={<MyBanks/>} />
      </Routes>
    </Router>
  );
};

export default App;
