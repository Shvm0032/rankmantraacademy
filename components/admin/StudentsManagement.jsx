"use client";
import React, { useState, useEffect } from "react";
import api from "@/utils/api";
import { Eye, Edit, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

const StudentsManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);

  const [studentData, setStudentData] = useState({
    id: null,
    name: "",
    phone: "",
    email: "",
    address: "",
    courseId: "",
    image: null,
    imagePreview: null,
    notes: "",
    status: "active",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [viewOnlyStudentId, setViewOnlyStudentId] = useState(null);

  // Fetch courses from API on mount
  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await api.get("/courses"); // adjust the endpoint if needed
        if (response?.data) {
          setCourses(response.data.courses);
        }
      } catch (error) {
        console.error(
          "Failed to fetch courses, using fallback dummy courses",
          error
        );
        // fallback dummy courses
        setCourses([
          { _id: "c1", title: "React Development", duration: 3 },
          { _id: "c2", title: "Node.js Backend", duration: 3 },
          { _id: "c3", title: "Fullstack Developer", duration: 6 },
        ]);
      }
    }
    fetchCourses();
  }, []);

  // get student data
  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await api.get("/students"); // update endpoint as per your API
        setStudents(response.data.students || []);
      } catch (error) {
        console.error("Failed to fetch students:", error);
      }
    }
    fetchStudents();
  }, []);

  // Auto-calculate when courseId or joiningDate changes
  useEffect(() => {
    if (studentData.courseId && studentData.joiningDate) {
      const selectedCourse = courses.find(
        (c) => c._id === studentData.courseId
      );
      if (selectedCourse) {
        const duration = selectedCourse.duration; // months
        const start = new Date(studentData.joiningDate);
        if (!isNaN(start.getTime())) {
          start.setMonth(start.getMonth() + duration);
          setStudentData((prev) => ({
            ...prev,
            courseDuration: duration,
            courseName: selectedCourse.title,
          }));
        } else {
          setStudentData((prev) => ({
            ...prev,
            courseDuration: duration,
            courseName: selectedCourse.title,
          }));
        }
      }
    } else {
      setStudentData((prev) => ({
        ...prev,
        courseDuration: "",
        courseName: "",
      }));
    }
  }, [studentData.courseId, studentData.joiningDate, courses]);

  // Handle input changes (including image preview)
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      const file = files[0];
      const previewURL = URL.createObjectURL(file);
      setStudentData((prev) => ({
        ...prev,
        image: file,
        imagePreview: previewURL,
      }));
    } else {
      setStudentData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Open form to add new student
  const openAddForm = () => {
    setStudentData({
      id: null,
      name: "",
      phone: "",
      email: "",
      address: "",
      courseId: "",
      courseDuration: "",
      joiningDate: "",
      image: null,
      imagePreview: null,
      notes: "",
      status: "active",
    });
    setShowForm(true);
  };

  // Open form to edit existing student
  const openEditForm = (student) => {
    setStudentData({
      id: student.id,
      name: student.name,
      phone: student.phone,
      email: student.email,
      address: student.address,
      courseId: student.courseId,
      courseDuration:
        courses.find((c) => c._id === student.courseId)?.duration || "",
      joiningDate: student.joiningDate,
      image: null,
      imagePreview: student.image,
      notes: student.notes,
      status: student.status,
    });
    setShowForm(true);
  };

  // Delete student
  const deleteStudent = async (id) => {
    if (confirm("Are you sure you want to delete this student?")) {
      try {
        await api.delete(`/students/${id}`);
        setStudents((prev) => prev.filter((s) => s.id !== id));
        if (viewOnlyStudentId === id) {
          setViewOnlyStudentId(null);
        }
      } catch (error) {
        console.error("Failed to delete student:", error);
        alert("Failed to delete student, please try again.");
      }
    }
  };

  const saveStudent = async () => {
    if (
      !studentData.name ||
      !studentData.courseId ||
      !studentData.joiningDate
    ) {
      alert("Please fill in name, course and joining date.");
      return;
    }

    try {
      const formData = new FormData();
      // Append all fields
      formData.append("name", studentData.name);
      formData.append("phone", studentData.phone);
      formData.append("email", studentData.email);
      formData.append("address", studentData.address);
      formData.append("courseId", studentData.courseId);
      formData.append("joiningDate", studentData.joiningDate);
      formData.append("notes", studentData.notes);
      formData.append("status", studentData.status);

      if (studentData.image instanceof File) {
        formData.append("image", studentData.image);
      }

      let response;
      if (studentData.id) {
        // Update existing
        response = await api.put(`/students/${studentData.id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        // Update local state
        setStudents((prev) =>
          prev.map((s) => (s.id === studentData.id ? response.data.student : s))
        );
      } else {
        // Create new
        response = await api.post("/students", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setStudents((prev) => [response.data.student, ...prev]);
      }

      toast.success("Student saved successfully.");

      setShowForm(false);
      setStudentData({
        id: null,
        name: "",
        phone: "",
        email: "",
        address: "",
        courseId: "",
        courseDuration: "",
        joiningDate: "",
        image: null,
        imagePreview: null,
        notes: "",
        status: "active",
      });
    } catch (error) {
      console.error("Failed to save student:", error);
      toast.error("Failed to save student. Please try again.");
    }
  };

  // Filter students for display based on search and view-only
  const filteredStudents = students.filter((s) => {
    if (viewOnlyStudentId !== null) {
      return s.id === viewOnlyStudentId;
    }
    if (!searchTerm) return true;
    return s.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="p-6 w-full text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Students Management</h2>
        <button
          onClick={openAddForm}
          className="bg-[#D83030] text-white px-4 py-2 rounded-lg hover:bg-[#c02a2a] transition-colors cursor-pointer"
        >
          Add New Student
        </button>
      </div>

      {/* Stats */}
      <div className="bg-gray-800 rounded-lg p-6 w-full mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Total Students</h3>
            <p className="text-3xl font-bold text-[#D83030]">
              {students.length}
            </p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Active Students</h3>
            <p className="text-3xl font-bold text-green-500">
              {students.filter((s) => s.status === "active").length}
            </p>
          </div>

          {/* Placeholder stats */}
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">New This Month</h3>
            <p className="text-3xl font-bold text-blue-500">45</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Completion Rate</h3>
            <p className="text-3xl font-bold text-purple-500">78%</p>
          </div>
        </div>

        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search students by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>
      </div>

      {/* Students List */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Students List</h3>
        {filteredStudents.length === 0 ? (
          <p>No students found.</p>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {console.log("Rendering students:", filteredStudents)}
            {filteredStudents.map((std) => (
              <div
                key={std.id}
                className="flex items-center gap-4 bg-gray-700 rounded p-3"
              >
                <img
                  src={std.image || "https://via.placeholder.com/64"}
                  alt={std.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold text-lg">{std.name}</p>
                  <p className="text-sm">
                    Course:{" "}
                    <span className="italic text-yellow-300">
                      {std.courseId?.title || "No Course Assigned"}
                    </span>
                  </p>

                  <p
                    className={`text-sm font-semibold ${
                      std.status === "active"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    Status: {std.status}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  {/* Edit Icon Button */}
                  <button
                    onClick={() => openEditForm(std)}
                    className="p-2 rounded hover:bg-yellow-600 bg-yellow-500 transition"
                    title="Edit Student"
                    aria-label="Edit Student"
                  >
                    <Edit className="w-5 h-5 text-white" />
                  </button>

                  {/* Delete Icon Button */}
                  <button
                    onClick={() => deleteStudent(std.id)}
                    className="p-2 rounded hover:bg-red-700 bg-red-600 transition"
                    title="Delete Student"
                    aria-label="Delete Student"
                  >
                    <Trash2 className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add/Edit Student Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-800 w-full max-w-lg p-6 rounded-lg relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-white text-xl hover:text-red-500 cursor-pointer"
              aria-label="Close"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">
              {studentData.id ? "Edit Student" : "Add New Student"}
            </h2>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                saveStudent();
              }}
            >
              {/* Image */}
              <div>
                <label className="block mb-1">Student Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 cursor-pointer"
                />
                {studentData.imagePreview && (
                  <img
                    src={studentData.imagePreview}
                    alt="Preview"
                    className="mt-2 w-32 h-32 object-cover rounded"
                  />
                )}
              </div>

              {/* Name */}
              <div>
                <label className="block mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={studentData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700"
                  placeholder="Enter full name"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={studentData.phone}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700"
                  placeholder="Enter phone number"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={studentData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700"
                  placeholder="Enter email"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block mb-1">Address</label>
                <textarea
                  name="address"
                  value={studentData.address}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700"
                  rows="3"
                  placeholder="Enter full address"
                ></textarea>
              </div>

              {/* Course Select */}
              <div>
                <label className="block mb-1">Select Course</label>
                <select
                  name="courseId"
                  value={studentData.courseId}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700"
                  required
                >
                  <option value="">Choose course</option>
                  {courses.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.title} ({c.duration} months)
                    </option>
                  ))}
                </select>
              </div>

              {/* Joining Date */}
              <div>
                <label className="block mb-1">Joining Date</label>
                <input
                  type="date"
                  name="joiningDate"
                  value={studentData.joiningDate}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700"
                  required
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block mb-1">Notes (optional)</label>
                <textarea
                  name="notes"
                  value={studentData.notes}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700"
                  rows="2"
                ></textarea>
              </div>

              {/* Status */}
              <div>
                <label className="block mb-1">Status</label>
                <select
                  name="status"
                  value={studentData.status}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#D83030] text-white py-2 rounded-lg hover:bg-[#c02a2a]"
              >
                {studentData.id ? "Update Student" : "Save Student"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsManagement;
