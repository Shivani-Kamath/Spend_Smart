import React from "react";

const BankAccounts = () => {
  const accounts = [
    {
      name: "JS Mastery Pro.",
      cardNumber: "1234 1234 1234 1234",
      expiry: "06/24",
    },
  ];
  return (
    <div className="bg-white shadow rounded-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">My Banks</h2>
        <button className="text-blue-500 font-medium">+ Add bank</button>
      </div>
      <div className="flex overflow-x-auto space-x-4">
        {accounts.map((account, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-6 shadow-lg min-w-[250px]"
          >
            <h3 className="text-lg font-bold">{account.name}</h3>
            <p className="text-sm mt-2">{account.cardNumber}</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm">{account.expiry}</p>
              <p className="text-sm font-medium">VISA</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankAccounts;
