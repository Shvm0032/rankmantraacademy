"use client";

import Image from "next/image";
export default function ChooseSection({
  imageSrc = "/about/maria.webp",
  alt = "Illustration",
  subheading = "Why Choose",
  heading = "RankMantra Academy",
}) {
  return (
    <section className="bg-white w-full px-4 md:px-8 lg:px-16 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-stretch gap-6">

          <div className="md:w-1/2 w-full bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full"
              priority
            />
          </div>

          {/* ✅ RIGHT DIV - Static paragraph */}
          <div className="md:w-1/2 w-full bg-white rounded-xl p-6 flex flex-col justify-start">
            
            <span className="text-xl font-semibold text-[#D83030] tracking-wider uppercase">
              {subheading}
            </span>

            <h2 className="text-black mt-2 text-2xl md:text-5xl font-bold leading-tight">
              {heading}
            </h2>

            {/* Animated curves */}
            <div className="mt-4 mb-4 overflow-hidden h-12 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="min-w-full animate-slide">
                  <CurvesSVG />
                </div>
                <div className="min-w-full animate-slide">
                  <CurvesSVG />
                </div>
              </div>
            </div>

            {/* ✅ Normal paragraph without array */}
            <div className="mt-2 space-y-3">
              <p className="text-base leading-relaxed text-gray-700">
                <span className="font-semibold">Experienced Mentors :</span> Industry experts with years of teaching and professional experience to guide you at every step of your learning journey.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <span className="font-semibold">Practical Live Projects : </span> Work on real-time projects to gain hands-on experience and build a strong portfolio.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <span className="font-semibold">Certification Provided :</span> Get an industry-recognized certificate that adds value to your resume and boosts your career opportunities.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <span className="font-semibold">Placement Assistance :</span> Dedicated support to help you with interview preparation, resume building, and job referrals.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <span className="font-semibold">1000+ Students Trained : </span> Join a strong community of learners who have successfully completed our programs and advanced in their careers.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                <span className="font-semibold">Updated Curriculum : </span>Learn with a curriculum designed as per the latest industry standards and technologies.
              </p>

              {/* Add more paragraphs here if needed */}
              {/* <p>Second paragraph text...</p> */}
            </div>

          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-slide {
          animation: slide 6s linear infinite;
        }

        .curve-svg {
          width: 100%;
          height: 48px;
        }
      `}</style>
    </section>
  );
}

function CurvesSVG() {
  return (
    <svg
      width="200"
      height="20"
      viewBox="0 0 200 20"
      xmlns="http://www.w3.org/2000/svg"
      className="wave-path"
    >
      <path
        d="M0 10 Q 12 0, 25 10 T 50 10 T 75 10 T 100 10 T 125 10 T 150 10 T 175 10 T 200 10"
        stroke="#E63946"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
