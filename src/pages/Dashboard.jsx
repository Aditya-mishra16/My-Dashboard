import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import LeadDetails from "../components/LeadDetails";
import ActivitySection from "../components/ActivitySection";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex min-h-0">
        <div className="flex flex-1">
          <div
            className={`${
              isSidebarOpen ? "w-48" : "w-14"
            } transition-all duration-300 flex-shrink-0`}
          >
            <Sidebar isOpen={isSidebarOpen} />
          </div>

          <main className="flex-1 overflow-auto">
            <Navbar />
            <div className="grid grid-cols-12 h-full">
              <div className="col-span-5 h-full border-r">
                <LeadDetails />
              </div>

              <div className="col-span-7 h-full">
                <ActivitySection />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
