"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sneha Kapoor",
    role: "Content Marketing Student",
    review:
      "The best part about RankMantra is their industry-oriented teaching style. I got to work on live projects, which boosted my experience a lot.",
    stars: 5,
  },
  {
    name: "Neha Sharma",
    role: "Social Media Marketing Student",
    review:
      "RankMantra not only taught me the skills but also guided me in building my portfolio. Their placement support is truly amazing!",
    stars: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Digital Marketing Student",
    review:
      "The mentors are very supportive and the sessions are highly interactive. The live projects really help in understanding real-world marketing challenges.",
    stars: 5,
  },
  {
    name: "Priya Singh",
    role: "SEO & Analytics Student",
    review:
      "RankMantra has been a turning point in my career. The practical approach and placement assistance were top-notch!",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#fffaf9] py-16 px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0b0b0b] mb-2">
          Student Review
        </h2>
        <div className="w-24 h-[3px] bg-[#D83030] mx-auto mb-12"></div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            className="mySwiper"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-lg rounded-xl p-8 mx-3 h-full flex flex-col justify-between border border-gray-100 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex justify-center mb-3 text-gray-500 text-3xl">
                    <FaQuoteRight />
                  </div>
                  <p className="text-gray-700 italic mb-4 text-[15px] leading-relaxed">
                    {t.review}
                  </p>
                  <div className="flex justify-center text-[#FFD700] mb-2">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <h4 className="font-bold text-[#000]">{t.name}</h4>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <div className="swiper-button-prev-custom absolute top-1/2 -left-6 transform -translate-y-1/2 z-10 cursor-pointer bg-white shadow-lg hover:bg-[#D83030] text-[#D83030] hover:text-white transition-all duration-300 p-3 rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 cursor-pointer bg-white shadow-lg hover:bg-[#D83030] text-[#D83030] hover:text-white transition-all duration-300 p-3 rounded-full">
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
