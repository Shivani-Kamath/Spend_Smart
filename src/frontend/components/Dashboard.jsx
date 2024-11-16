import React from 'react';
import Navbar from "src/frontend/components/Navbar";
import AccountSummary from "src/frontend/components/AccountSummary";
import TransactionList from "src/frontend/components/TransactionList";
import FinanceInsights from "src/frontend/components/FinanceInsights";


const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="px-6 py-8">
        {/* Welcome Message */}
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome back, John!</h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Account Summary */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <AccountSummary />
          </div>

          {/* Recent Transactions */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <TransactionList />
          </div>

          {/* Finance Insights */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <FinanceInsights />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
