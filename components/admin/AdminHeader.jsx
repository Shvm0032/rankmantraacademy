import React from "react";

const AdminHeader = ({ activeTab, setActiveTab }) => {
  const handleProfileClick = () => {
    setActiveTab("profile");
  };

const handleLogout = () => {
  fetch("/api/logout", { method: "POST" }).then(() => {
    window.location.href = "/admin";
  });
};

  return (
    <header className="bg-gray-800 shadow-sm border-b border-gray-700">
      <div className="flex items-center justify-between px-6 py-4">

        <h2 className="text-2xl font-bold text-white capitalize">
          {activeTab === "dashboard" ? "Admin Dashboard" : activeTab}
        </h2>

        <div className="flex items-center space-x-4">

          <button
            onClick={handleLogout}
            className="text-white cursor-pointer bg-[#D83030] hover:bg-[#b32525] 
            px-4 py-2 rounded-lg font-semibold transition active:scale-95 shadow-md"
          >
            Logout
          </button>

          <button
            onClick={handleProfileClick}
            className="cursor-pointer transition active:scale-95"
          >
            <div className="w-9 h-9 bg-[#D83030] rounded-full flex items-center justify-center 
            hover:bg-[#b32525] shadow-md">
              <span className="text-white font-semibold">RM</span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
