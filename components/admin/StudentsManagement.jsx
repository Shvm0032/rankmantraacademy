import React from 'react';

const StudentsManagement = () => {
  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Students Management</h2>
        <button className="bg-[#D83030] text-white px-4 py-2 rounded-lg hover:bg-[#c02a2a] transition-colors">
          Add New Student
        </button>
      </div>
      
      <div className="bg-gray-800 rounded-lg p-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Total Students</h3>
            <p className="text-3xl font-bold text-[#D83030]">1,234</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Active Students</h3>
            <p className="text-3xl font-bold text-green-500">1,089</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">New This Month</h3>
            <p className="text-3xl font-bold text-blue-500">45</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Completion Rate</h3>
            <p className="text-3xl font-bold text-purple-500">78%</p>
          </div>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-6">
          <p className="text-gray-300 text-center py-8">
            Students management content will be loaded from backend...
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentsManagement;