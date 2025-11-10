import React from "react";

const CourseFeesSection = () => {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className=" mb-10">
          <h3 className="text-gray-700 text-lg font-medium mb-2">
            What will it cost you?
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Know your{" "}
            <span className="text-[#D83030] font-bold">
              course fees & structure
            </span>
          </h2>
        </div>

        {/* Main Card */}
        <div className="bg-white  rounded-xl shadow flex flex-col md:flex-row justify-between items-start md:items-start p-4 gap-8">
          {/* Left Side */}
          <div className="bg-gray-100 rounded-lg px-4 py-4   md:w-1/2">
            <p className="text-sm text-gray-500 ">Starting at</p>
            <h3 className="text-3xl font-bold text-[#D83030]">
              ₹ 333 <span className="text-lg text-gray-700 font-semibold">per day</span>
            </h3>
            <p className="text-gray-600  text-sm font-medium">Total ₹ 9,999</p>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2">
            <h4 className="text-lg font-semibold mb-1 text-gray-800">
              What you'll get:
            </h4>
            <ul className="space-y-1 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#D83030] text-xl mr-2">✔</span>
                Learn core digital marketing skills in 45 days
              </li>
              <li className="flex items-start">
                <span className="text-[#D83030] text-xl mr-2">✔</span>
                Hands-on training with real projects
              </li>
              <li className="flex items-start">
                <span className="text-[#D83030] text-xl mr-2">✔</span>
                Practical exposure to SEO, SMM, SEM & more
              </li>
              <li className="flex items-start">
                <span className="text-[#D83030] text-xl mr-2">✔</span>
                Certificate on course completion
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFeesSection;
