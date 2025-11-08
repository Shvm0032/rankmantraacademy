import React from "react";
import Image from "next/image";

import course1 from "@/public/home/course1.webp";
import course2 from "@/public/home/course2.webp";
import course3 from "@/public/home/course3.webp";

const courses = [
    {
        title: "Basic Digital Marketing Course",
        shortTitle: "BASIC MARKETING COURSE",
        duration: "30 DAYS",
        price: "9,999",
        scholarship: "25%",
        img: course1,
        desc: "Our Basic Digital Marketing Course is designed for beginners who want to step into the world of online marketing. This...",
    },
    {
        title: "Advance Digital Marketing Course",
        shortTitle: "ADVANCED MARKETING COURSE",
        duration: "90 DAYS",
        price: "25,000",
        scholarship: "25%",
        img: course2,
        desc: "Our Advance Digital Marketing Course is designed for professionals, entrepreneurs, and students who want to master...",
    },
    {
        title: "Performance Marketing Course",
        shortTitle: "PERFORMANCE MARKETING COURSE",
        duration: "45 DAYS",
        price: "15,000",
        scholarship: "20%",
        img: course3,
        desc: "Our Performance Marketing Course focuses on result-driven digital marketing strategies that help...",
    },
];

const HomeCourses = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-3">
                    Our Courses
                </h2>
                <div className="w-24 h-[3px] bg-[#D83030] mx-auto mb-10"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white p-2 shadow-md rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
                        >
                            {/* Top Image Section */}
                            <div className="relative  rounded-lg overflow-hidden">
                                <Image
                                    src={course.img}
                                    alt={course.title}
                                    className="w-full h-[250px] rounded-lg object-cover transform transition-transform duration-500 hover:scale-110"
                                />

                                {/* Overlay Text */}

                            </div>

                            {/* Bottom Text */}
                            <div className="p-6 text-center">
                                <h4 className="text-2xl font-extrabold text-black mb-2">
                                    {course.title}
                                </h4>
                                <p className="text-gray-700 text-md line-clamp-2 mb-6  leading-relaxed">
                                    {course.desc}
                                </p>
                                <button className="bg-[#D83030] cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b82929] transition duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeCourses;
