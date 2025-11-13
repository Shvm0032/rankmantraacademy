import React from "react";

const CourseFeesSection = ({ data }) => {
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
            <h3 className="text-3xl font-bold text-[#000000]">
              ₹ {data?.cost?.price}
            </h3>
            <p className="text-gray-600  text-sm font-medium">Total ₹ {data?.courseFee}</p>
          </div>

         {/* Right Side */}
<div className="md:w-1/2">
  <h4 className="text-lg font-semibold mb-1 text-gray-800">
    What you'll get:
  </h4>
  <ul className="space-y-1 text-gray-700">
    {data?.cost?.list?.map((item, i) => (
      <li key={i} className="flex items-start">
        <span className="text-[#D83030] text-xl mr-2">✔</span>
        {item}
      </li>
    ))}
  </ul>
</div>

        </div>
      </div>
    </section>
  );
};

export default CourseFeesSection;
