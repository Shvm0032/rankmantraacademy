import React from "react";


const AdminHeader = ({ activeTab, setActiveTab }) => {
  const handleProfileClick = () => {
    setActiveTab("profile");
  };
  return (
    <header className="bg-gray-800 shadow-sm border-b border-gray-700">
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-2xl font-bold text-white capitalize">
          {activeTab === "dashboard" ? "Admin Dashboard" : activeTab}
        </h2>
        <div className="flex items-center space-x-4">
          <button className="text-gray-300 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-5 5v-5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button onClick={handleProfileClick} className="cursor-pointer">
            <div className="w-8 h-8 bg-[#D83030] rounded-full flex items-center justify-center hover:bg-[#c02a2a] transition-colors">
              <span className="text-white font-semibold">RM</span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
