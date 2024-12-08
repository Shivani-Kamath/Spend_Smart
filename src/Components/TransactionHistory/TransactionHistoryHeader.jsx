import React from "react";

const TransactionHistoryHeader = ({ selectedBank, setSelectedBank }) => {
  const banks = ["HDFC", "ICICI", "Union Bank of India", "SBI", "Canara"];

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };

  return (
    <div className="p-6 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">Transaction history</h1>
        <p className="text-gray-600">
          Gain Insights and Track Your Transactions Over Time
        </p>
      </div>
      <div>
        <label htmlFor="bankFilter" className="text-gray-600 mr-2"></label>
        <select
          id="bankFilter"
          value={selectedBank}
          onChange={handleBankChange}
          className="border border-gray-300 rounded-md p-2 focus:outline-none"
        >
          {/* Placeholder option */}
          <option value="" disabled>
            Choose your bank
          </option>
          <option value="All">All</option>
          {banks.map((bank) => (
            <option key={bank} value={bank}>
              {bank}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TransactionHistoryHeader;
