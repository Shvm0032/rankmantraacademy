import React from "react";

const ProfileSettings = () => {
  return (
    <div className="p-6 w-full">
      <div className="bg-gray-800 rounded-lg p-6 w-full">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center space-x-6 mb-8">
            {/* Image in Circle */}
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-[#D83030]">
              <img
                src="/admin/logo-admin.png"
                alt="Admin Avatar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback if image doesn't load */}
              <div className="w-full h-full bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Admin User</h3>
              <p className="text-gray-300">info@rankmantraacademy.com</p>
             
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#D83030]"
                  defaultValue="Rank"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#D83030]"
                  defaultValue="Mantra"
                />
              </div>
            </div>

            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#D83030]"
                defaultValue="info@rankmantraacademy.com"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Role</label>
              <input
                type="text"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#D83030]"
                defaultValue="Super Administrator"
                disabled
              />
            </div>

            <div className="pt-4">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
