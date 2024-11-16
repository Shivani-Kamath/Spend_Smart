import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">SpendSmart</h1>

        {/* Nav Links */}
        <ul className="flex space-x-6">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Accounts</li>
          <li className="hover:underline cursor-pointer">Transactions</li>
          <li className="hover:underline cursor-pointer">Insights</li>
        </ul>

        {/* Profile */}
        <div className="flex items-center space-x-4">
          <div className="bg-white text-blue-600 font-bold rounded-full w-8 h-8 flex justify-center items-center">
            JD
          </div>
          <p>John Doe</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
