import React from "react";
import { FiEdit, FiUsers, FiList, FiRefreshCcw } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md px-6 py-3 flex flex-col space-y-2 border">
   
      <div className="text-gray-500 text-sm">
        Dashboard / Lead / <span className="text-blue-600 cursor-pointer">LE-1023</span>
      </div>

      <div className="flex justify-between items-center w-full">
        <h2 className="text-lg font-semibold">LE-1023</h2>

        <div className="flex items-center space-x-3">
          <FiEdit className="text-gray-600 cursor-pointer" />
          <FiUsers className="text-gray-600 cursor-pointer" />
          <FiList className="text-gray-600 cursor-pointer" />
          <FiRefreshCcw className="text-gray-600 cursor-pointer" />
        </div>
      </div>
      <hr />

      <div className="flex justify-between items-center w-full">

        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 bg-green-500 text-white rounded flex items-center">
            ✅
          </button>
          <button className="px-3 py-1 bg-green-500 text-white rounded flex items-center">
            ✅
          </button>
          <button className="px-3 py-1 bg-orange-200 text-orange-600 rounded">Nurturing</button>
          <button className="px-3 py-1 bg-gray-300 text-gray-700 rounded">Convert</button>
        </div>
        <hr />

        <button className="px-3 py-1 bg-[#0E2A47] text-white rounded">
          Mark as Converted
        </button>
      </div>
    </div>
  );
};

export default Navbar;
