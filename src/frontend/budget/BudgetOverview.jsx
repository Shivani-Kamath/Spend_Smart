import React, { useState } from "react";

const BudgetOverview = () => {
  // Initial State for Budget Categories
  const [budgets, setBudgets] = useState([
    { category: "Groceries", allocated: 500, spent: 300 },
    { category: "Rent", allocated: 1500, spent: 1500 },
    { category: "Utilities", allocated: 200, spent: 100 },
    { category: "Entertainment", allocated: 300, spent: 120 },
  ]);

  // State to manage adding new categories
  const [newCategory, setNewCategory] = useState("");
  const [newAllocated, setNewAllocated] = useState("");

  // Function to Add a New Budget Category
  const addCategory = (e) => {
    e.preventDefault();
    if (newCategory && newAllocated > 0) {
      setBudgets([
        ...budgets,
        { category: newCategory, allocated: parseFloat(newAllocated), spent: 0 },
      ]);
      setNewCategory("");
      setNewAllocated("");
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10 px-5">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Budget Overview</h1>

      {/* Budget Table */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Current Budgets</h2>

        {budgets.length === 0 ? (
          <p className="text-gray-500 text-center">No budgets set yet. Add a new category below.</p>
        ) : (
          <div className="space-y-4  text-black">
            {budgets.map((budget, index) => {
              const progress = Math.min((budget.spent / budget.allocated) * 100, 100);
              return (
                <div key={index} className="border-b pb-4  text-black">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-medium ">{budget.category}</p>
                    <p className="text-sm text-gray-500">
                      Spent: ${budget.spent} / ${budget.allocated}
                    </p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                    <div
                      className={`h-4 rounded-full ${
                        progress < 80 ? "bg-green-500" : progress < 100 ? "bg-yellow-500" : "bg-red-500"
                      }`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Add New Budget */}
      <div className="w-full max-w-4xl bg-white  text-black shadow-md rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Add a New Budget</h2>
        <form
          onSubmit={addCategory}
          className="flex flex-col md:flex-row gap-4 items-center justify-between"
        >
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Category Name"
            className="border-2  text-black border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            value={newAllocated}
            onChange={(e) => setNewAllocated(e.target.value)}
            placeholder="Allocated Budget ($)"
            className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default BudgetOverview;
