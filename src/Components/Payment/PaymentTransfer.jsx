import React from 'react';
import LeftSideBar from '../SideBars/LeftSideBar';

const PaymentTransfer = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen overflow-hidden">
      <div className="col-span-2 bg-gray-100 min-h-screen">
        <LeftSideBar />
      </div>
      <div className="col-span-10 flex flex-col p-4">
        <div className="flex flex-col flex-grow">
          <div className="mb-2">
            <h1 className="text-black font-semibold text-4xl mb-3">Payment Transfer</h1>
            <h2 className="text-black text-base mt-1 mb-3">
              Please provide any specific details or notes related to the payment transfer
            </h2>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-black text-2xl font-semibold mb-1">Transfer Details</h1>
              <span className="text-gray-700 text-2xl">⋮</span>
            </div>
            <h2 className="text-black text-base mt-1 mb-3">
             Enter the details of the recipient
            </h2>

            <div className="border-t border-gray-300 my-1 mb-2 mt-2"></div>
            <div className="flex justify-between items-center mt-1">
              <label className="text-black text-lg mb-2 mt-2">Select Source Bank</label>
              
              <select className="border rounded p-1 text-black w-1/2">
                <option value="">Select Account</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>

            <div className="border-t border-gray-300 my-1"></div>
            <div className="flex justify-between items-start mt-1">
              <label className="text-black text-lg mb-2 mt-2">Transfer Note</label>
              <textarea
                className="border p-1 text-black w-1/2 h-24 rounded mb-2 mt-2"
                placeholder="Add any notes here..."
              ></textarea>
            </div>

            <div className="border-t border-gray-300 my-1 mb-2 mt-2"></div>
            <h1 className="text-black text-2xl font-semibold mb-1">Bank Account Details</h1>
            <h1 className='mb-4'>Enter the Bank Account details of the recipient</h1>
            <div className="flex justify-between items-center mt-1">
                
              <label className="text-black text-lg mb-2 mt-2">Recipient's Email Address</label>
              <input
                type="text"
                placeholder="john@gmail.com"
                className="bg-gray-100 py-1 px-2 rounded w-1/2"
              />
            </div>

            <div className="border-t border-gray-300 my-1 mb-2 mt-2"></div>
            <div className="flex justify-between items-center mt-1">
              <label className="text-black text-lg mb-2 mt-2">Recipient's Bank Account Number</label>
              <input
                type="text"
                placeholder="Enter the Account Number"
                className="bg-gray-100 py-1 px-2 rounded w-1/2"
              />
            </div>

            <div className="border-t border-gray-300 my-1"></div>
            <div className="flex justify-between items-center mt-1">
              <label className="text-black text-lg mb-2 mt-2">Amount</label>
              <input
                type="text"
                placeholder="Enter amount"
                className="bg-gray-100 py-1 px-2 rounded w-1/2"
              />
            </div>

            <div className="border-t border-gray-300 my-2"></div>
          </div>

          <div className="flex justify-end mt-2">
            <button
              className="bg-blue-500 text-white font-semibold py-4 font-lg px-4 mt-4 rounded hover:bg-blue-600 transition w-full"
              type="submit"
            >
              Transfer Funds
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTransfer;
