"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StudentReviews() {
  const reviews = [
    { image: "/reviews/studentreview1.webp", alt: "Student Review 1" },
    { image: "/reviews/studentreview2.webp", alt: "Student Review 2" },
    { image: "/reviews/studentreview3.webp", alt: "Student Review 3" },
  ];

  return (
    <section className="bg-[#e7e9ed] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-3">
          Student Reviews
        </h2>
        <div className="w-24 h-[3px] bg-[#D83030] mx-auto mb-10"></div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src={review.image}
                    alt={review.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrow Buttons (same as Testimonials) */}
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
}
