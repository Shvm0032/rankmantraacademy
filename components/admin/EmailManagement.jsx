import React from 'react';

const EmailManagement = () => {
  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Email Management</h2>
        <button className="bg-[#D83030] text-white px-4 py-2 rounded-lg hover:bg-[#c02a2a] transition-colors">
          Compose Email
        </button>
      </div>
      
      <div className="bg-gray-800 rounded-lg p-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Total Emails</h3>
            <p className="text-3xl font-bold text-[#D83030]">156</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Unread</h3>
            <p className="text-3xl font-bold text-yellow-500">23</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Sent</h3>
            <p className="text-3xl font-bold text-blue-500">89</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Drafts</h3>
            <p className="text-3xl font-bold text-gray-500">12</p>
          </div>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-6">
          <p className="text-gray-300 text-center py-8">
            Email management content will be loaded from backend...
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailManagement;