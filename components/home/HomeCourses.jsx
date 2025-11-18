"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import api from "@/utils/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";

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

        <div className="relative">

          {/* 🔥 Custom Same-Style Arrows */}
          <div className="swiper-button-prev-custom absolute top-1/2 -left-6 transform -translate-y-1/2 z-20 cursor-pointer bg-white shadow-lg hover:bg-[#D83030] text-[#D83030] hover:text-white transition-all duration-300 p-3 rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </div>

          <div className="swiper-button-next-custom absolute top-1/2 -right-6 transform -translate-y-1/2 z-20 cursor-pointer bg-white shadow-lg hover:bg-[#D83030] text-[#D83030] hover:text-white transition-all duration-300 p-3 rounded-full">
            <ChevronRight className="w-5 h-5" />
          </div>

          {/* 🔥 Swiper Slider */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={false}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {courses.map((course) => (
              <SwiperSlide key={course._id}>
                <div className="bg-white p-2 shadow-md rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
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
                      href={`/course/${course.slug}`}
                      className="bg-[#D83030] cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b82929] transition duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default HomeCourses;
