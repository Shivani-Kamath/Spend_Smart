import React, { useState } from "react";

const transactions = [
  {
    id: 1,
    name: "Salary",
    amount: "+₹5000",
    status: "Success",
    date: "Jun 25, 2024",
    category: "Income",
  },
  {
    id: 2,
    name: "Groceries",
    amount: "-₹150",
    status: "Expense",
    date: "Jun 24, 2024",
    category: "Food",
  },
  {
    id: 3,
    name: "Electricity Bill",
    amount: "-₹100",
    status: "Expense",
    date: "Jun 23, 2024",
    category: "Utilities",
  },
  {
    id: 4,
    name: "Freelance Work",
    amount: "+₹800",
    status: "Success",
    date: "Jun 22, 2024",
    category: "Income",
  },
  {
    id: 5,
    name: "Rent",
    amount: "-₹1200",
    status: "Expense",
    date: "Jun 21, 2024",
    category: "Housing",
  },
  {
    id: 6,
    name: "Gym Membership",
    amount: "-₹50",
    status: "Expense",
    date: "Jun 20, 2024",
    category: "Health",
  },
  {
    id: 7,
    name: "Restaurant",
    amount: "-₹75",
    status: "Expense",
    date: "Jun 19, 2024",
    category: "Food",
  },
  {
    id: 8,
    name: "Internet Bill",
    amount: "-₹60",
    status: "Expense",
    date: "Jun 18, 2024",
    category: "Utilities",
  },
  {
    id: 9,
    name: "Transport",
    amount: "-₹40",
    status: "Expense",
    date: "Jun 17, 2024",
    category: "Transport",
  },
  {
    id: 10,
    name: "Office Supplies",
    amount: "-₹30",
    status: "Expense",
    date: "Jun 16, 2024",
    category: "Work",
  },
];

const categories = [
  "All",
  "Food",
  "Health",
  "Housing",
  "Transport",
  "Education",
  "Entertainment",
  "Utilities",
  "Income",
  "Work",
];

const RecentTransactions = () => {
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleFilterChange = (event) => {
    setFilteredCategory(event.target.value);
  };

  const filteredTransactions =
    filteredCategory === "All"
      ? transactions
      : transactions.filter((tx) => tx.category === filteredCategory);

  return (
    <div className="bg-white shadow rounded-md p-6">
      {/* Header with Filter Dropdown */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Recent Transactions
        </h2>
        <div className="relative">
          <select
            value={filteredCategory}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 bg-white shadow focus:outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Transactions Table */}
      <div id="transactionslist" className="overflow-auto max-h-96">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-gray-600 font-medium bg-gray-100">
              <th className="px-4 py-2 text-left">Transaction</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((tx) => (
              <tr key={tx.id} className="border-t text-gray-800">
                <td className="px-4 py-2">{tx.name}</td>
                <td className="px-4 py-2">{tx.amount}</td>
                <td
                  className={`px-4 py-2 ${
                    tx.status === "Success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {tx.status}
                </td>
                <td className="px-4 py-2">{tx.date}</td>
                <td className="px-4 py-2">{tx.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Show a message if no transactions are found */}
        {filteredTransactions.length === 0 && (
          <div className="text-center text-gray-500 py-4">
            No transactions found for the selected category.
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentTransactions;
