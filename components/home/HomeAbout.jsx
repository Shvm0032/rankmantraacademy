"use client"
import React from "react";
import Image from "next/image";
import aboutImg from "@/public/home/homeAboutsectionImage.webp";
import { useRouter } from "next/navigation";
const HomeAbout = () => {   
    const router = useRouter()
    return (
        <section className="bg-[#fff9f6] py-8 px-4 md:py-16">
            <div className="flex items-center justify-center flex-col">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">
                    About RankMantra Academy
                </h2>
                <div className="w-[200px] h-[4px] bg-[#D83030] mx-auto lg:mx-0 mb-6"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={aboutImg}
                            alt="RankMantra Academy"
                            className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                </div>

                {/* Right Side - Text */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">


                    {/* Red underline */}

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        RankMantra Academy is a leading digital marketing training institute
                        dedicated to empowering students, professionals, and entrepreneurs
                        with practical skills in online marketing. With expert trainers,
                        hands-on projects, and industry-recognized certifications, we ensure
                        our learners gain real-world knowledge to build successful careers
                        in the digital landscape.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8  text-lg ">
                        At RankMantra Academy, our mission is to bridge the gap between
                        theoretical learning and practical implementation. Whether you are a
                        beginner looking to start your journey or a professional aiming to
                        upskill, we provide comprehensive training programs designed to meet
                        your goals.
                    </p>

                    <button
                    onClick={() => router.push("/about")}
                     className="bg-[#D83030] cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-[#D83030] transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
