import React from "react";
import { Layers, Build, Business, BarChart, Person, Store, AccountTree } from "@mui/icons-material";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`h-full bg-white flex flex-col items-center p-2 transition-all duration-300 shadow-lg`}>
      {/* Icons */}
      <div className="mt-4 flex flex-col space-y-6">
        <SidebarItem icon={<Layers sx={{ color: '#FF5733' }} />} text="Layers" isOpen={isOpen} />
        <SidebarItem icon={<Build sx={{ color: '#33FF57' }} />} text="Tools" isOpen={isOpen} />
        <SidebarItem icon={<Business sx={{ color: '#3357FF' }} />} text="Business" isOpen={isOpen} />
        <SidebarItem icon={<BarChart sx={{ color: '#FF33A1' }} />} text="Analytics" isOpen={isOpen} />
        <SidebarItem icon={<Person sx={{ color: '#33FFF5' }} />} text="Users" isOpen={isOpen} />
        <SidebarItem icon={<Store sx={{ color: '#F5FF33' }} />} text="Store" isOpen={isOpen} />
        <SidebarItem icon={<AccountTree sx={{ color: '#8A33FF' }} />} text="Hierarchy" isOpen={isOpen} />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, isOpen }) => (
  <div className="flex items-center text-gray-800 space-x-3 py-1 rounded-lg cursor-pointer hover:bg-[#0E2A47] hover:text-white w-full">
    {icon}
    {isOpen && <span className="text-sm">{text}</span>}
  </div>
);

export default Sidebar;