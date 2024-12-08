import React from "react";

const BudgetCategory = () => {
  const categories = [
    {
      name: "Subscriptions",
      amountLeft: "$25 left",
      progress: "w-1/4",
      color: "bg-blue-500",
    },
    {
      name: "Food and booze",
      amountLeft: "$120 left",
      progress: "w-3/4",
      color: "bg-red-500",
    },
    {
      name: "Savings",
      amountLeft: "$50 left",
      progress: "w-1/2",
      color: "bg-green-500",
    },
  ];
  return (
    <div className="mt-6 bg-white shadow rounded-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">My Budgets</h2>
      <div>
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center justify-between mb-4 p-3 bg-gray-100 rounded-md"
          >
            <div className="flex items-center space-x-4">
              {/* Icon Placeholder */}
              <div
                className={`h-10 w-10 rounded-full ${category.color} bg-opacity-20 flex items-center justify-center`}
              >
                {/* Replace with relevant icons */}
                <span className="text-lg">{category.name[0]}</span>
              </div>
              <div>
                <p className="text-sm text-gray-800 font-medium">
                  {category.name}
                </p>
                <p className="text-sm text-gray-400">{category.amountLeft}</p>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="flex-1 ml-4">
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className={`h-2 rounded-full ${category.color} ${category.progress}`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetCategory;
