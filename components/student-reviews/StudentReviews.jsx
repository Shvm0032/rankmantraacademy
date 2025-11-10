"use client";

import Image from "next/image";

export default function StudentReviews() {
  const reviews = [
    {
      image: "/reviews/studentreview1.webp",
      alt: "Student Review 1",
    },
    {
      image: "/reviews/studentreview2.webp",
      alt: "Student Review 2",
    },
    {
      image: "/reviews/studentreview3.webp",
      alt: "Student Review 3",
    },
  ];

  return (
    <section className="bg-[#e7e9ed] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden  hover:scale-[1.02] transition-transform duration-300 "
            >
              <Image
                src={review.image}
                alt={review.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
