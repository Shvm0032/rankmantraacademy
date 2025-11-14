"use client";
import React, { useState } from "react";

const CoursesManagement = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Courses Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#D83030] cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-[#c02a2a] transition-colors"
        >
          Add New Course
        </button>
      </div>

      {/* Stats */}
      <div className="bg-gray-800 rounded-lg p-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Total Courses</h3>
            <p className="text-3xl font-bold text-[#D83030]">24</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Active Courses</h3>
            <p className="text-3xl font-bold text-green-500">18</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Inactive Courses</h3>
            <p className="text-3xl font-bold text-yellow-500">6</p>
          </div>
        </div>

        {/* Placeholder */}
        <div className="bg-gray-900 rounded-lg p-6">
          <p className="text-gray-300 text-center py-8">
            Courses management content will be loaded from backend...
          </p>
        </div>
      </div>

      {/* ADD COURSE FORM MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl w-full max-w-lg shadow-lg max-h-[90vh] overflow-y-auto p-6">
            <h3 className="text-2xl  text-white font-bold mb-4">Add New Course</h3>

            <form className="space-y-4">
              {/* Title */}
              <div>
                <label className="text-gray-300">Course Title</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 bg-gray-700 cursor-pointer text-white rounded"
                  placeholder="Enter course title"
                />
              </div>

              {/* Thumbnail IMAGE Upload */}
              <div>
                <label className="text-gray-300">Thumbnail Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full mt-1 p-2 bg-gray-700 cursor-pointer text-white rounded"
                />
              </div>

              {/* Description */}
              <div>
                <label className="text-gray-300">Description</label>
                <textarea
                  className="w-full cursor-pointer mt-1 p-2 bg-gray-700 text-white rounded"
                  rows="3"
                  placeholder="Enter course description"
                ></textarea>
              </div>

              {/* Price */}
              <div>
                <label className="text-gray-300">Price (₹)</label>
                <input
                  type="number"
                  className="w-full mt-1 p-2 cursor-pointer bg-gray-700 text-white rounded"
                  placeholder="Enter price"
                />
              </div>

              {/* Duration */}
              <div>
                <label className="text-gray-300">Duration</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 bg-gray-700 cursor-pointer text-white rounded"
                  placeholder="e.g., 2 Months, 40 Hours"
                />
              </div>

              {/* PDF Upload */}
              <div>
                <label className="text-gray-300">Upload PDF</label>
                <input
                  type="file"
                  accept="application/pdf"
                  className="w-full mt-1 p-2 cursor-pointer bg-gray-700 text-white rounded"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-4 pb-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-600 cursor-pointer text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#D83030] cursor-pointer text-white rounded hover:bg-[#c22a2a]"
                >
                  Save Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesManagement;
