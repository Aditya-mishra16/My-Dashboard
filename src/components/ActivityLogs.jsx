import React from "react";
import { Circle } from "@mui/icons-material";

const ActivityLogs = () => {
  return (
    <div className="bg-white p-4 w-80 border min-h-[120%] flex flex-col justify-between border">
      <div>
        <h3 className="font-semibold mb-3 pb-4 border-b">Activity Logs</h3>
        <div className="text-gray-600 font-medium">January 2025</div>
        <div className="border-l-2 border-dashed border-gray-400 pl-4 space-y-4 mt-2">
          <ActivityLog date="10/01" time="03:12 PM" type="Lead" desc="New Lead Created by Anamnaaj" />
          <ActivityLog date="13/01" time="06:20 PM" type="Status" desc="Status Updated to Nurturing" />
          <ActivityLog date="28/01" time="04:30 PM" type="Activity" desc="Share Catalogue" />
          <ActivityLog date="28/01" time="04:30 PM" type="Activity" desc="Introductory call" />
        </div>
      </div>
    </div>
  );
};

const ActivityLog = ({ date, time, type, desc }) => (
  <div className="relative pl-2">

    <Circle className="text-blue-500 absolute -left-4 top-1" fontSize="small" />
    
    <p className="text-sm text-gray-500">{date} | {type} | {time}</p>

    <p className="text-sm font-semibold">{desc}</p>
  </div>
);

export default ActivityLogs;
