import React, { useState } from "react";

const StudentsManagement = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Students Management</h2>

        <button
          onClick={() => setShowForm(true)}
          className="bg-[#D83030] text-white px-4 py-2 rounded-lg hover:bg-[#c02a2a] transition-colors cursor-pointer"
        >
          Add New Student
        </button>
      </div>

      {/* Stats */}
      <div className="bg-gray-800 rounded-lg p-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">
              Total Students
            </h3>
            <p className="text-3xl font-bold text-[#D83030]">1,234</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">
              Active Students
            </h3>
            <p className="text-3xl font-bold text-green-500">1,089</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">
              New This Month
            </h3>
            <p className="text-3xl font-bold text-blue-500">45</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">
              Completion Rate
            </h3>
            <p className="text-3xl font-bold text-purple-500">78%</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6">
          <p className="text-gray-300 text-center py-8">
            Students management content will be loaded from backend...
          </p>
        </div>
      </div>

      {/* Add Student Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div
            className="bg-gray-800 w-full max-w-lg p-6 rounded-lg relative 
            max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-white text-xl hover:text-red-500 cursor-pointer"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Add New Student
            </h2>

            <form className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="text-white block mb-1">Name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                  placeholder="Enter student name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-white block mb-1">Phone Number</label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                  placeholder="Enter phone number"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-white block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                  placeholder="Enter email"
                />
              </div>

              {/* Address */}
              <div>
                <label className="text-white block mb-1">Address</label>
                <textarea
                  className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                  rows="3"
                  placeholder="Enter address"
                ></textarea>
              </div>

              {/* Image Upload */}
              <div>
                <label className="text-white block mb-1">Student Image</label>
                <div className="border border-gray-600 p-3 rounded bg-gray-700 cursor-pointer">
                  <input type="file" className="w-full cursor-pointer" />
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-[#D83030] text-white py-2 rounded-lg hover:bg-[#c02a2a] cursor-pointer">
                Save Student
              </button>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsManagement;
