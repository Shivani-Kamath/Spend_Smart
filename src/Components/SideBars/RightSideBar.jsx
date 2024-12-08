import React from "react";
import BankAccounts from "../other/BankAccounts";
import BudgetCategory from "../other/BudgetCategory";

const RightSideBar = () => {
  return (
    <div>
      <div>
        <BankAccounts />
        <BudgetCategory />
      </div>
    </div>
  );
};

export default RightSideBar;
