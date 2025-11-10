"use client";
import { useState } from "react";
import { CheckCircle, Star } from "lucide-react";
import course1 from "@/public/home/course1.webp"

export default function CoursesHero() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        course: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
    };

    return (
        <section className="relative w-full overflow-hidden bg-[#111] text-white">
            {/* Background image + dark overlay */}
            <div
                className="absolute inset-0 bg-[url('@/public/home/course1.webp')] bg-cover bg-center"
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-8 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-10">

                {/* LEFT SIDE - Course Details */}
                <div className="md:w-[60%]">
                    <div className="inline-block bg-white/40 text-white px-5 py-2 rounded-full mb-6 text-sm tracking-wide">
                        Basic Digital Marketing Course for Beginners
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 leading-tight">
                        Basic Digital Marketing Course
                    </h1>

                    <ul className="space-y-2 mb-4 text-lg text-gray-200">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-[#ffffff] w-6 h-6 mt-1 " />
                            Learn from Industry Experts with real-world experience
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-[#ffffff] w-6 h-6 mt-1 " />
                            Hands-on Training with live projects
                        </li>
                    </ul>

                    <div className="md:flex items-center gap-3 justify-between">
                        <div className="flex items-center gap-3 mb-6 ">
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white bg-red-500">
                                <img
                                    src="https://i.pravatar.cc/100?img=12"
                                    alt="profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-gray-200">Join 15k+ Digital Achievers</p>
                        </div>

                        <div className="flex items-center gap-2 mb-8">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
                            ))}
                            <p className="text-md text-gray-200">4.5/5 (10,275 ratings)</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between gap-6 bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10 w-full">
                        <div className="w-[45%]">
                            <p className="text-base text-gray-300">Course Fee</p>
                            <p className="text-3xl font-bold text-white mt-1">₹ 9,999</p>
                        </div>
                        <div className="w-px h-12 bg-white/20 hidden md:block"  />
                        <div className="w-[45%]">
                            <p className="text-base text-gray-300">Duration</p>
                            <p className="text-3xl font-bold text-white mt-1">30 Days</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - Form */}
                <div className="bg-white text-black rounded-2xl shadow-2xl w-full lg:w-[35%] p-8 lg:p-10">
                    <h3 className="text-2xl font-bold text-center mb-6">
                        Book Your Spot
                        <div className="w-16 h-[3px] bg-red-500 mx-auto mt-2 rounded-full"></div>
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full border-b border-gray-400 focus:border-red-500 outline-none py-2 text-gray-800"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-semibold"></label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="w-full border-b border-gray-400 focus:border-red-500 outline-none py-2 text-gray-800"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-semibold"></label>
                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                className="w-full border-b border-gray-400 focus:border-red-500 outline-none py-2 bg-transparent text-gray-800"
                                required
                            >
                                <option value="" disabled>Select Course</option>
                                <option value="basic">Basic Digital Marketing</option>
                                <option value="advanced">Advanced Digital Marketing</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-full text-lg font-semibold transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
