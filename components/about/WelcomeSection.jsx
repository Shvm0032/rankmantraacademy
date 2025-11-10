"use client";
import Image from "next/image";

export default function InfoSection() {
  return (
    <section className="bg-white w-full py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT DIV */}
        <div>
          {/* Subheading */}
          <p className="text-[#D83030] text-xl uppercase tracking-wider font-bold mb-2">
            Welcome to
          </p>

          {/* Heading */}
          <h2 className="text-2xl md:text-5xl font-extrabold text-[#032E42] mb-4">
            Rankmantra Academy
          </h2>

          {/* Paragraph (Width Reduced + Unified) */}
          <p className="text-gray-700 text-base text-justify mb-8 max-w-[500px]">
            <span className="font-bold">Rank Mantra Academy</span> is dedicated
            to empowering students with industry-relevant digital marketing
            skills. Our focus is on practical learning, real-world projects, and
            helping learners build successful careers in the digital world.
          </p>

          {/* TEXT ROW 1 */}
          <div className="flex gap-4 mb-6">
            {/* OUR Mission */}
            <div className="min-w-[120px]">
              <h2 className="text-[#D83030] text-5xl font-extrabold leading-none">
                OUR
              </h2>
              <p className="uppercase text-2xl text-gray-700 font-semibold">
                Mission
              </p>
            </div>

            {/* Vertical Line */}
            <span className="h-auto w-px bg-gray-300"></span>

            {/* Text with SAME width */}
            <p className="text-gray-600 text-base text-justify flex-1 max-w-[350px]">
              To provide high-quality, affordable, and practical digital
              marketing education that transforms students into industry-ready
              professionals.
            </p>
          </div>

          {/* TEXT ROW 2 */}
          <div className="flex gap-4">
            {/* OUR Vision */}
            <div className="min-w-[120px]">
              <h2 className="text-[#D83030] text-5xl font-extrabold leading-none">
                OUR
              </h2>
              <p className="uppercase tracking-widest text-2xl font-semibold text-gray-700">
                Vision
              </p>
            </div>

            <span className="h-auto w-px bg-gray-300"></span>

            {/* SAME width as above */}
            <p className="text-gray-600 text-base text-justify flex-1 max-w-[350px]">
              To become the most trusted digital marketing academy, shaping the
              future of thousands of learners across India.
            </p>
          </div>
        </div>

        {/* RIGHT DIV */}
        <div className="w-full">
          <Image
            src="/about/about_right.png"
            alt="About Image"
            width={600}
            height={500}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
