import React from 'react';

const FinanceInsights = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Finance Insights</h2>
      <div className="flex justify-between items-center">
        <p className="text-gray-500">Monthly Expenses</p>
        <p className="font-bold text-red-600">$2,350</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-500">Savings This Month</p>
        <p className="font-bold text-green-600">$650</p>
      </div>
      {/* Placeholder for Graph */}
      <div className="bg-gray-200 rounded-lg mt-6 h-32 flex items-center justify-center">
        <p className="text-gray-500">[Graph Placeholder]</p>
      </div>
    </div>
  );
};

export default FinanceInsights;
