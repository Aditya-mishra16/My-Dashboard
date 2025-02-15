import React from "react";
import { Call } from "@mui/icons-material";

const OverdueActivities = () => {
  const activities = [
    { title: "Share Catalogue", dueDate: "2025-01-28", time: "16:20:00" },
    { title: "Introductory call", dueDate: "2025-01-28", time: "17:30:00" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full border">
   
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">Overdue Activities</h3>
        <span className="text-bg-[#0E2A47] text-sm font-medium cursor-pointer underline">View Upcoming</span>
      </div>

      <div className="flex space-x-4">
        {activities.map((activity, index) => (
          <div key={index} className="border p-3 rounded-lg shadow-sm w-56">
            <div className="flex items-center space-x-2">
              <Call className="text-green-500" fontSize="small" />
              <h4 className="font-semibold text-sm">{activity.title}</h4>
            </div>
            <div className="mt-2 text-xs">
              <p><strong>Due Date</strong> {activity.dueDate}</p>
              <p><strong>Time</strong> {activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverdueActivities;
