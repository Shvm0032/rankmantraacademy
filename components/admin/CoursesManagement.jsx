"use client";
import React, { useState, useEffect } from "react";
import api from "@/utils/api";
import { Trash2 } from "lucide-react"; // Import Trash2 icon
import toast from "react-hot-toast";
import ConfirmDeleteModal from "@/components/admin/ConfirmDeleteModal";

const CoursesManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [courses, setCourses] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingCourseId, setEditingCourseId] = useState(null);

  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [pdf, setPdf] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteCourseId, setDeleteCourseId] = useState(null);

  const [loading, setLoading] = useState(false);

  // Fetch courses
  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await api.get("/courses");
        if (response.data.success) {
          setCourses(response.data.courses);
        }
      } catch (error) {
        console.error("Failed to fetch courses", error);
      }
    }
    fetchCourses();
  }, []);

  // Handle thumbnail change
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    if (file) {
      setThumbnailPreview(URL.createObjectURL(file));
    } else {
      setThumbnailPreview(null);
    }
  };

  // Handle PDF change
  const handlePdfChange = (e) => {
    setPdf(e.target.files[0]);
  };

  // Edit course - prefill form
  const handleEdit = (course) => {
    setIsEditing(true);
    setEditingCourseId(course._id);
    setTitle(course.title);
    setDescription(course.description);
    setPrice(course.price);
    setDuration(course.duration);
    setThumbnailPreview(course.thumbnail);
    setThumbnail(null);
    setPdf(null);
    setShowForm(true);
  };

  // Delete course
  const handleDelete = async () => {
    try {
      const response = await api.delete(`/courses/${deleteCourseId}`);

      if (response.data.success) {
        setCourses((prev) => prev.filter((c) => c._id !== deleteCourseId));
        toast.success("Course deleted successfully!");
      } else {
        toast.error("Failed to delete course");
      }
    } catch (error) {
      console.error("Error deleting course:", error);
      toast.error("Something went wrong");
    }
  };

  // Clear form
  const clearForm = () => {
    setTitle("");
    setThumbnail(null);
    setThumbnailPreview(null);
    setDescription("");
    setPrice("");
    setDuration("");
    setPdf(null);
    setIsEditing(false);
    setEditingCourseId(null);
  };

  // sumbit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !price || !duration) {
      toast.error("Please fill all fields!");
      return;
    }
    if (!isEditing && !thumbnail) {
      toast.error("Please upload thumbnail and curriculum PDF!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("duration", duration);
    if (thumbnail) formData.append("thumbnail", thumbnail);
    if (pdf) formData.append("curriculum", pdf);

    try {
      setLoading(true);

      const toastId = toast.loading(
        isEditing ? "Updating course..." : "Creating course..."
      );

      let response;
      if (isEditing) {
        response = await api.put(`/courses/${editingCourseId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        response = await api.post("/create-courses", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      toast.dismiss(toastId);

      if (response.data.success) {
        toast.success(
          isEditing
            ? "Course updated successfully!"
            : "Course created successfully!"
        );

        setShowForm(false);
        clearForm();

        if (isEditing) {
          setCourses((prev) =>
            prev.map((c) =>
              c._id === editingCourseId ? response.data.course : c
            )
          );
        } else {
          setCourses((prev) => [response.data.course, ...prev]);
        }
      } else {
        toast.error(response.data.message || "Failed to save course");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Courses Management</h2>
        <button
          onClick={() => {
            clearForm();
            setShowForm(true);
          }}
          className="bg-[#D83030] cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-[#c02a2a] transition-colors"
        >
          Add New Course
        </button>
      </div>

      {/* Stats */}
      <div className="bg-gray-800 rounded-lg p-6 w-full mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">
              Total Courses
            </h3>
            <p className="text-3xl font-bold text-[#D83030]">
              {courses.length}
            </p>
          </div>
        </div>
      </div>

      {/* Courses List */}
      <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
        {courses.length === 0 ? (
          <p className="text-gray-300 text-center py-8">No courses found.</p>
        ) : (
          <div className="space-y-4">
            {courses.map((course) => (
              <div
                key={course._id}
                className="flex items-center justify-between bg-gray-800 rounded-lg p-4"
              >
                <div className="flex items-center space-x-4 max-w-[70%]">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="h-16 w-24 object-cover rounded"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {course.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {course.description}
                    </p>
                    <p className="text-gray-300 text-sm mt-1">
                      Price: ₹{course.price} | Duration: {course.duration}
                    </p>
                    {course.curriculum ? (
                      <a
                        href={course.curriculum}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-sm text-blue-400 hover:underline"
                        title="View Curriculum PDF"
                      >
                        📄 View Curriculum PDF
                      </a>
                    ) : null}
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  {/* Edit icon */}
                  <button
                    onClick={() => handleEdit(course)}
                    aria-label="Edit Course"
                    className="text-blue-400 hover:text-blue-600"
                    title="Edit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.313 3 20.25l.937-4.5 13.925-13.263z"
                      />
                    </svg>
                  </button>

                  {/* Trash2 icon */}
                  <button
                    onClick={() => {
                      setDeleteCourseId(course._id);
                      setShowDeleteModal(true);
                    }}
                    aria-label="Delete Course"
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ADD / EDIT COURSE FORM MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl w-full max-w-lg shadow-lg max-h-[90vh] overflow-y-auto p-6">
            <h3 className="text-2xl text-white font-bold mb-4">
              {isEditing ? "Edit Course" : "Add New Course"}
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-gray-300">Course Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full mt-1 p-2 bg-gray-700 cursor-pointer text-white rounded"
                  placeholder="Enter course title"
                  required
                />
              </div>

              <div>
                <label className="text-gray-300">Thumbnail Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                  className="w-full mt-1 p-2 bg-gray-700 cursor-pointer text-white rounded"
                  required={!isEditing}
                />
                {thumbnailPreview && (
                  <img
                    src={thumbnailPreview}
                    alt="Thumbnail Preview"
                    className="mt-2 max-h-40 rounded"
                  />
                )}
              </div>

              <div>
                <label className="text-gray-300">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full cursor-pointer mt-1 p-2 bg-gray-700 text-white rounded"
                  rows="3"
                  placeholder="Enter course description"
                  required
                />
              </div>

              <div>
                <label className="text-gray-300">Price (₹)</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full mt-1 p-2 cursor-pointer bg-gray-700 text-white rounded"
                  placeholder="Enter price"
                  required
                  min={0}
                />
              </div>

              <div>
                <label className="text-gray-300">Duration</label>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full mt-1 p-2 bg-gray-700 cursor-pointer text-white rounded"
                  placeholder="e.g., 2 Months, 40 Hours"
                  required
                />
              </div>

              <div>
                <label className="text-gray-300">Upload PDF</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handlePdfChange}
                  className="w-full mt-1 p-2 cursor-pointer bg-gray-700 text-white rounded"
                  required={!isEditing}
                />
              </div>

              <div className="flex justify-end gap-3 mt-4 pb-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    clearForm();
                  }}
                  className="px-4 py-2 bg-gray-600 cursor-pointer text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-4 py-2 text-white rounded cursor-pointer ${
                    loading ? "bg-gray-500" : "bg-[#D83030] hover:bg-[#c22a2a]"
                  }`}
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                        ></path>
                      </svg>
                      Processing...
                    </div>
                  ) : isEditing ? (
                    "Update Course"
                  ) : (
                    "Save Course"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ConfirmDeleteModal
        isOpen={showDeleteModal}
        onCancel={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default CoursesManagement;
