import React from 'react';
import Navbar from "src/frontend/components/Navbar";
import AccountSummary from "src/frontend/components/AccountSummary";
import TransactionList from "src/frontend/components/TransactionList";
import FinanceInsights from "src/frontend/components/FinanceInsights";
import BudgetOverview from '../budget/BudgetOverview';


const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="p-10">
        <h1 className="text-4xl font-bold">Welcome to your Dashboard!</h1>
       <FinanceInsights/>
       <TransactionList/>
       <AccountSummary/>
       <BudgetOverview/>
      </div>
    </div>
  );
};

export default Dashboard;
