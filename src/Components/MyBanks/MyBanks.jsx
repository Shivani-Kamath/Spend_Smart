import React from "react";
import LeftSideBar from "../SideBars/LeftSideBar";

const MyBanks = () => {
  const cards = [
    { bank: "Horizon Banking", cardNumber: "1234 1234 1234 1234", name: "Adrian Hajdin", expiry: "06/24", spending: "$2,840.40" },
    { bank: "Bank of Australia", cardNumber: "1234 1234 1234 1234", name: "Adrian Hajdin", expiry: "06/24", spending: "$2,840.40" },
    { bank: "Bank of India", cardNumber: "1234 1234 1234 1234", name: "Adrian Hajdin", expiry: "06/24", spending: "$2,840.40" },
    { bank: "Bank of America", cardNumber: "1234 1234 1234 1234", name: "Olivia Rhye", expiry: "06/24", spending: "$2,840.40" },
    { bank: "Bank of Canada", cardNumber: "1234 1234 1234 1234", name: "Olivia Rhye", expiry: "06/24", spending: "$2,840.40" },
    { bank: "Bank of Pakistan", cardNumber: "1234 1234 1234 1234", name: "Olivia Rhye", expiry: "06/24", spending: "$2,840.40" },
  ];

  return (
    <div className="grid grid-cols-12 min-h-screen overflow-hidden">
    <div className="col-span-2 bg-gray-100 min-h-screen">
      <LeftSideBar />
    </div>
    <div className="max-w-6xl mx-auto p-6 text-left w-screen">
      
      <h1 className="text-3xl font-bold mb-4 text-black">My Bank Accounts</h1>
      <p className="text-gray-500 text-base mb-6">Effortlessly Manage Your Banking Activities</p>
      <div className="flex flex-wrap justify-between gap-6">
        {cards.map((card, index) => (
          <div key={index} className="w-full sm:w-1/4 mb-4">
            <div
              className={`p-7 rounded-lg shadow-lg text-white ${
                index % 2 === 0 ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gradient-to-r from-purple-500 to-indigo-500"
              }`}
            >
              <h2 className="text-lg font-semibold mb-4">{card.bank}</h2>
              <p className="text-sm">{card.cardNumber}</p>
              <p className="text-sm mt-2">
                {card.name} • {card.expiry}
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
              <span className="text-black mt-1">Spending this month</span>
              <span>{card.spending}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MyBanks;
