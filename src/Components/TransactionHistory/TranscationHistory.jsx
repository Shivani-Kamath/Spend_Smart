import React, { useState } from "react";
import LeftSideBar from "../SideBars/LeftSideBar";
import RecentTransactions from "../other/RecentTransactions";
import TotalAccountBalance from "../other/TotalAccountBalance";
import TransactionHistoryHeader from "./TransactionHistoryHeader";

const TranscationHistory = () => {
  const [selectedBank, setSelectedBank] = useState("");
  return (
    <div className="grid grid-cols-12 min-h-screen gap-1">
      <div className="col-span-2 rounded">
        <LeftSideBar />
      </div>
      <div className="col-span-10 grid-rows-12 rounded">
        <div className="row-span-2 rounded">
          <TransactionHistoryHeader
            selectedBank={selectedBank}
            setSelectedBank={setSelectedBank}
          />
        </div>
        <div className="row-span-3 mt-1 rounded">
          <TotalAccountBalance totalBalance={45000} />
        </div>
        <div className="row-span-7 mt-3 rounded">
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
};

export default TranscationHistory;
