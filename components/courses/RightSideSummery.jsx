import React from "react";
import { Eye } from "lucide-react"; 

const RightSideSummery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-10">
          <p className="uppercase text-[#D83030] text-sm tracking-wider font-medium">
            Curious about the course? Our FAQ has everything you need!
          </p>
          <h2 className="text-4xl font-bold text-[#001F3F] mt-2">FAQs</h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {/* 1 */}
          <details className="group border-b border-gray-200 pb-4">
            <summary className="flex items-center gap-3 cursor-pointer text-lg font-semibold text-[#001F3F]">
              <Eye className="text-[#D83030] w-5 h-5" />
              1. How long is this course?
            </summary>
            <p className="text-gray-700 mt-3 ml-8">
              The course duration is 1 to 1.5 months with practical training
              sessions.
            </p>
          </details>

          {/* 2 */}
          <details className="group border-b border-gray-200 pb-4">
            <summary className="flex items-center gap-3 cursor-pointer text-lg font-semibold text-[#001F3F]">
              <Eye className="text-[#D83030] w-5 h-5" />
              2. Do I need any technical knowledge?
            </summary>
            <p className="text-gray-700 mt-3 ml-8">
              No, this course is designed for beginners, and no prior experience
              is required.
            </p>
          </details>

          {/* 3 */}
          <details className="group border-b border-gray-200 pb-4">
            <summary className="flex items-center gap-3 cursor-pointer text-lg font-semibold text-[#001F3F]">
              <Eye className="text-[#D83030] w-5 h-5" />
              3. Will I get a certificate?
            </summary>
            <p className="text-gray-700 mt-3 ml-8">
              Yes, you will receive a recognized digital marketing certification
              after completing the course.
            </p>
          </details>

          {/* 4 */}
          <details className="group border-b border-gray-200 pb-4">
            <summary className="flex items-center gap-3 cursor-pointer text-lg font-semibold text-[#001F3F]">
              <Eye className="text-[#D83030] w-5 h-5" />
              4. What is the course fee?
            </summary>
            <p className="text-gray-700 mt-3 ml-8">
              The course fee is affordable, and we also provide flexible payment
              options. Contact us for detailed pricing.
            </p>
          </details>

          {/* 5 */}
          <details className="group border-b border-gray-200 pb-4">
            <summary className="flex items-center gap-3 cursor-pointer text-lg font-semibold text-[#001F3F]">
              <Eye className="text-[#D83030] w-5 h-5" />
              5. Can I get a job after this course?
            </summary>
            <p className="text-gray-700 mt-3 ml-8">
              Yes, we offer job assistance and guidance to help you start your
              digital marketing career.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default RightSideSummery;
