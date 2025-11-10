import React from "react";

const RightSideForm = () => {
  return (
    <div className="w-full max-w-sm bg-white border rounded-xl shadow-md p-8 mx-auto">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
        Book Your Spot
      </h2>
      <div className="flex justify-center">
        <div className="w-20 h-[3px] bg-[#D83030] mb-6"></div>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border-b border-black focus:border-[#D83030] outline-none py-1 text-gray-700"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
         
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full border-b border-black focus:border-[#D83030] outline-none py-1 text-gray-700"
            required
          />
        </div>

        {/* Select Course */}
        <div>
         
          <select
            className="w-full border-b border-black focus:border-[#D83030] outline-none py-1 text-gray-700 bg-transparent"
            required
          >
            <option value="" disabled>Select Course</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="web-development">Web Development</option>
            <option value="graphic-design">Graphic Design</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#D83030] hover:bg-red-600 text-white font-medium py-2 rounded-full transition-all duration-300"
        >
          Submit
        </button>

        {/* Disclaimer */}
        <p className="text-center text-sm text-gray-600 ">
          By clicking, I accept the{" "}
          <span className="text-[#D83030] font-semibold cursor-pointer">
            T&C
          </span>{" "}
          and{" "}
          <span className="text-[#D83030] font-semibold cursor-pointer">
            Privacy Policy
          </span>
        </p>
      </form>
    </div>
  );
};

export default RightSideForm;
