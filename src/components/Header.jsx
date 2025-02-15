import React, { useState } from "react";
import { Search, Bell, Calendar, Settings, Menu } from "lucide-react";

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <header className="bg-[#0E2A47] text-white px-4 py-2 flex justify-between items-center w-full">
      <div className="flex items-center space-x-5">

        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          className="text-white"
        >
          <Menu size={24} />
        </button>
        
        <h1 className="text-lg font-semibold">Expound Technivo</h1>
      </div>
      
      {/* Icons & Profile */}
      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5 cursor-pointer" />
        <Bell className="w-5 h-5 cursor-pointer" />
        <Calendar className="w-5 h-5 cursor-pointer" />
        <Settings className="w-5 h-5 cursor-pointer" />
        
        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center cursor-pointer">
          <span className="text-xs font-semibold">A</span>
        </div>
      </div>
    </header>
  );
};

export default Header;