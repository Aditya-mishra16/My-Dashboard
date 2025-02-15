import React from "react";
import ActivityForm from "./ActivityForm";
import ActivityLogs from "./ActivityLogs";
import OverdueActivities from "./Overdue_Activities";

const ActivitySection = () => {
  return (
    <div className="flex flex-col">
   
      <div className="flex w-full flex-grow">
          <ActivityForm />
          <ActivityLogs />
      </div>

      <div className="w-full mt-4">
        <OverdueActivities />
      </div>
    </div>
  );
};

export default ActivitySection;
