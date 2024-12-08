import React from "react";
import { Link } from "react-router-dom";
import UserDetails from "../other/UserDetails";

const LeftSideBar = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-4xl font-bold text-blue-600">SpendSmart</h2>
      <nav className="mt-8 space-y-4">
        <Link
          to="/"
          className="block text-gray-800 font-medium hover:text-blue-600"
        >
          Home
        </Link>
        <Link
          to="/my-banks"
          className="block text-gray-800 font-medium hover:text-blue-600"
        >
          My Banks
        </Link>
        <Link
          to="/transaction-history"
          className="block text-gray-800 font-medium hover:text-blue-600"
        >
          Transaction History
        </Link>
        <Link
          to="/payment-transfer"
          className="block text-gray-800 font-medium hover:text-blue-600"
        >
          Payment Transfer
        </Link>
        <Link
          to="#"
          className="block text-gray-800 font-medium hover:text-blue-600"
        >
          Connect Bank
        </Link>
      </nav>

      <UserDetails />
    </div>
  );
};

export default LeftSideBar;
