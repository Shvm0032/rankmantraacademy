"use client"
import React from "react";
import { BookOpen, Briefcase, HandCoins, SquareUserRound } from "lucide-react";
import { useRouter } from "next/navigation";
const HomeWhyChooseUs = () => {
    const route = useRouter()
    return (
        <section className="bg-[#fff9f6] py-8  md:py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-3">
                        Why Choose Us
                    </h2>
                    <div className="w-24 h-[3px] bg-[#D83030] mx-auto"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                    {/* Left Text */}
                    <div className="w-full lg:w-1/2 text-gray-800 leading-relaxed">
                        <p className="mb-5 text-lg">
                            At <span className="font-bold text-black">RankMantra Academy</span>, we believe that learning digital marketing
                            should be more than just theory — it should be a journey of gaining
                            real-world skills that prepare you to excel in today’s competitive
                            industry. Our programs are not limited to classroom lectures;
                            instead, we focus on a{" "}
                            <span className="font-semibold text-black">
                                practical, hands-on approach
                            </span>{" "}
                            that allows students to apply concepts immediately on live projects.
                        </p>

                        <p className="mb-8 text-lg">
                            We understand that every learner is different — some are beginners
                            looking to explore new career opportunities, while others are
                            professionals aiming to upgrade their skills. That’s why our
                            training is designed with{" "}
                            <span className="font-semibold text-black">
                                flexibility and personalization
                            </span>
                            , ensuring that each student receives the right guidance based on
                            their goals.
                        </p>

                        <button 
                        onClick={() => route.push("/course/basic-digital-marketing-course")}
                        className="bg-[#D83030] cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b82929] transition duration-300">
                            Explore Our Courses
                        </button>
                    </div>

                    {/* Right Boxes */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Box 1 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                            <SquareUserRound className="w-8 h-8 text-black mb-3" />
                            <h4 className="text-lg font-semibold text-[#D83030] mb-2">
                                Expert Trainers
                            </h4>
                            <p className="text-gray-700 text-md">
                                Learn directly from experienced professionals working in the
                                industry.
                            </p>
                        </div>

                        {/* Box 2 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                            <HandCoins className="w-8 h-8 text-black mb-3" />
                            <h4 className="text-lg font-semibold text-[#D83030] mb-2">
                                Hands-On Training
                            </h4>
                            <p className="text-gray-700 text-md">
                                Work on live projects and gain practical knowledge.
                            </p>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                            <Briefcase className="w-8 h-8 text-black mb-3" />
                            <h4 className="text-lg font-semibold text-[#D83030] mb-2">
                                Placement Assistance
                            </h4>
                            <p className="text-gray-700 text-md">
                                We guide you towards internships and job placements with top
                                companies.
                            </p>
                        </div>

                        {/* Box 4 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                            <BookOpen className="w-8 h-8 text-black mb-3" />
                            <h4 className="text-lg font-semibold text-[#D83030] mb-2">
                                Flexible Learning Options
                            </h4>
                            <p className="text-gray-700 text-md">
                                Online & offline classes designed to fit your schedule.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeWhyChooseUs;
