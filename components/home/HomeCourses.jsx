"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import api from "@/utils/api"; // ⚡ your axios instance

const HomeCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.get("/courses");
        setCourses(res.data.courses);
      } catch (error) {
        console.log("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-3">
          Our Courses
        </h2>
        <div className="w-24 h-[3px] bg-[#D83030] mx-auto mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white p-2 shadow-md rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  width={500}
                  height={300}
                  className="w-full h-[250px] rounded-lg object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6 text-center">
                <h4 className="text-2xl font-extrabold text-black mb-2">
                  {course.title}
                </h4>

                <p className="text-gray-700 text-md line-clamp-2 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <Link
                  href={`/course/${course.slug}`} // 🔥 dynamic slug link
                  className="bg-[#D83030] cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b82929] transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCourses;
