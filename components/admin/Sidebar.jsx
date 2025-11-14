import React from 'react';
import {
  FiGrid,
  FiBook,
  FiUsers,
  FiMail,
  FiUser,
} from "react-icons/fi";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: <FiGrid className="w-5 h-5" />,
    },
    {
      id: "courses",
      name: "Courses",
      icon: <FiBook className="w-5 h-5" />,
    },
    {
      id: "students",
      name: "Students",
      icon: <FiUsers className="w-5 h-5" />,
    },
    {
      id: "emails",
      name: "Emails",
      icon: <FiMail className="w-5 h-5" />,
    },
    {
      id: "profile",
      name: "Profile",
      icon: <FiUser className="w-5 h-5" />,
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-800 shadow-lg">
      <div className="p-6 border-b border-gray-700 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-white mt-3 text-center">
          Admin Panel
        </h1>
      </div>

      <nav className="mt-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center cursor-pointer px-6 py-3 text-left transition-colors ${
              activeTab === tab.id
                ? "bg-[#D83030] text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <span className="mr-3">{tab.icon}</span>
            {tab.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;