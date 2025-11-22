"use client";

import { useEffect, useState } from "react";
import api from "@/utils/api";

export default function CoursesContent() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get(`/courses`);
        setCourses(res.data.courses);
      } catch (error) {
        console.log("error course in fetching", error);
      }
    };
    fetchCourse();
  }, []);

  // ===============================
  // SHOW COURSE DETAILS PAGE HERE
  // ===============================

  if (selectedCourse) {
    return (
      <div className="w-full">
        {/* BACK BUTTON */}
        <button
          className="mb-5 text-white cursor-pointer px-4 py-2 bg-[#032E42]  rounded-lg"
          onClick={() => setSelectedCourse(null)}
        >
          ← Back
        </button>

        {/* IMAGE */}
        <div className="w-full h-56 md:h-96 bg-gray-200 rounded-lg overflow-hidden mb-6">
          <img
            src={selectedCourse.thumbnail}
            alt={selectedCourse.title}
            className="w-full h-[400px] object-content"
          />
        </div>

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {selectedCourse.title}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mb-6 text-base leading-relaxed">
          {selectedCourse.description}
        </p>

        {/* DURATION */}
        <div className="p-4 bg-gray-100 rounded-lg mb-6">
          <p className="text-sm text-gray-700">Duration</p>
          <p className=" text-gray-700 font-semibold text-lg">{selectedCourse.duration}</p>
        </div>

        {/* TOPICS */}
        <div className="mb-8">
          <h3 className="text-xl text-gray-700 font-semibold mb-3">Topics Covered</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {selectedCourse.topics?.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // ===============================
  // DEFAULT COURSES LIST VIEW
  // ===============================

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            {/* IMAGE */}
            <div className="w-full h-40 bg-gray-200 overflow-hidden">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-content"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="font-bold text-xl text-gray-800">{course.title}</h3>

              <p className="text-gray-600 text-sm mt-1">{course.description}</p>

              <p className="text-gray-500 text-xs mt-1">
                Instructor: <span className="font-medium">{course.instructor}</span>
              </p>

              <div className="flex justify-between items-center mt-3 text-sm text-gray-700">
                <p>
                  <b>Duration:</b> {course.duration}
                </p>
                <p>
                  <b>Topics:</b> {course.topicsCount}
                </p>
              </div>

              <div className="mt-4">
                <button
                  className="text-[#e26b6b] cursor-pointer hover:text-[#D83030] font-medium text-sm"
                  onClick={() => setSelectedCourse(course)}
                >
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
