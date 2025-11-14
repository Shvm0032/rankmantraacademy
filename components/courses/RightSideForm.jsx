"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "@/utils/api";

const RightSideForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    selectedCourse: "",
  });
  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phoneNumber || !formData.selectedCourse) {
      toast.error("Please fill all fields!");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/booking-create", formData);
      if (res.status === 201) {
        toast.success("Booking created successfully!");
        setFormData({ fullName: "", phoneNumber: "", selectedCourse: "" });
      } else {
        toast.error("Failed to create booking. Try again!");
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

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
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full border-b border-black focus:border-[#D83030] outline-none py-1 text-gray-700"
          required
        />

        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="w-full border-b border-black focus:border-[#D83030] outline-none py-1 text-gray-700"
          required
        />

        <select
          name="selectedCourse"
          value={formData.selectedCourse}
          onChange={handleChange}
          className="w-full border-b border-black focus:border-[#D83030] outline-none py-1 text-gray-700 bg-transparent"
          required
        >
          <option value="" disabled>
            Select Course
          </option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Web Development">Web Development</option>
          <option value="Graphic Design">Graphic Design</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#D83030] hover:bg-red-600 text-white font-medium py-2 rounded-full transition-all duration-300 disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        <p className="text-center text-sm text-gray-600">
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
