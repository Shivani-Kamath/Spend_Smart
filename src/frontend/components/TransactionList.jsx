import React from 'react';

const transactions = [
  { id: 1, description: 'Grocery Store', amount: '-$45.78', date: 'Nov 14, 2024' },
  { id: 2, description: 'Salary', amount: '+$3,000.00', date: 'Nov 12, 2024' },
  { id: 3, description: 'Electricity Bill', amount: '-$120.50', date: 'Nov 10, 2024' },
];

const TransactionList = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Transactions</h2>
      <div className="space-y-4 max-h-64 overflow-y-auto">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex justify-between items-center border-b pb-2 last:border-b-0"
          >
            <div>
              <p className="text-gray-800 font-medium">{transaction.description}</p>
              <p className="text-gray-500 text-sm">{transaction.date}</p>
            </div>
            <p
              className={`font-bold ${
                transaction.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'
              }`}
            >
              {transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
