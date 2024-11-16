import React from 'react';

const AccountSummary = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Account Summary</h2>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-500">Checking Account</p>
        <p className="font-bold text-green-600">$8,530.45</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-500">Savings Account</p>
        <p className="font-bold text-green-600">$12,340.22</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-500">Credit Card</p>
        <p className="font-bold text-red-600">- $1,245.67</p>
      </div>
    </div>
  );
};

export default AccountSummary;
