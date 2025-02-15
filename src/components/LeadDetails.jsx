import React from "react";

const LeadDetails = () => {
  return (
    <div className="bg-white w-full h-full flex flex-col border">
      {/* Header */}
      <div className="flex items-start justify-between px-2 pt-6">
        <div>
          <p className="text-xs font-medium">test</p>
          <h2 className="text-lg font-bold">Aditya Mishra</h2>
        </div>
        <div className="flex flex-col items-left">
          <span className="text-xs text-gray-500 mb-1">
            <span className="inline-block mr-1">⏱</span>
            Pending Actions
          </span>
          <div className="flex gap-1">
            <button className="text-[12px] px-2 py-0.5 bg-green-50 text-green-600 rounded">
              Create Account
            </button>
            <button className="text-[12px] px-2 py-0.5 bg-yellow-50 text-yellow-600 rounded">
              Create Contact
            </button>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="flex items-center px-2 mt-1 mb-2">
        <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs mr-1">
          A
        </div>
        <span className="text-xs font-bold">Aditya Mishra</span>
        <span className="text-xs text-gray-500 ml-1 font-bold">Event</span>
      </div>

      {/* Tabs */}
      <div className="border-t border-b">
        <div className="flex text-xs">
          <div className="px-2 py-1 border-b-2 border-black">
            Basic Details
            <span className="ml-1 text-[10px] bg-red-500 text-white rounded-full w-3.5 h-3.5 inline-flex items-center justify-center">
              10
            </span>
          </div>
          <div className="px-2 py-1 text-gray-500">Account Details</div>
          <div className="px-2 py-1 text-gray-500">
            Lead Details
            <span className="ml-1 text-[10px] bg-red-500 text-white rounded-full w-3.5 h-3.5 inline-flex items-center justify-center">
              8
            </span>
          </div>
          <div className="px-2 py-1 text-gray-500">Team</div>
          <div className="px-2 py-1 text-gray-500">Other Contacts</div>
        </div>
      </div>

      {/* Form Content */}
<div className="px-2 py-1 flex-grow">
  <div className="grid grid-cols-3 mb-3 pb-4 border-b">
    <div>
      <div className="text-xs font-bold">Title</div>
      <div className="text-xs text-gray-500">test</div>
    </div>
    <div>
      <div className="text-xs font-bold">First Name</div>
      <div className="text-xs text-gray-500">Ramesh</div>
    </div>
    <div>
      <div className="text-xs font-bold">Last Name</div>
      <div className="text-xs text-gray-500">Sharma</div>
    </div>
  </div>

  <div className="text-xs font-bold mb-1 pb-4">Address Details</div>
  <div className="grid grid-cols-3">
    <div>
      <div className="text-xs font-bold">Region</div>
      <div className="text-xs text-gray-500">APAC</div>
    </div>
    <div>
      <div className="text-xs font-bold">Country</div>
      <div className="text-xs text-gray-500">India</div>
    </div>
    <div>
      <div className="text-xs font-bold">Zone</div>
      <div className="text-xs text-gray-500">North</div>
    </div>
  </div>
</div>

      <div className="flex items-center text-gray-400 text-[10px] mt-auto px-2 py-48">
        <span className="mr-1">10</span>
        empty field, fill the pending information
        <button className="ml-auto bg-blue-900 p-1.5 rounded">
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LeadDetails;
