"use client";
import Image from "next/image";
import img from "@/public/home/heroHome.webp";

export default function HeroHome() {
    return (
        <section className="w-full bg-white  overflow-hidden py-8 md:py-0">
            <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-10">

                {/* LEFT SIDE CONTENT */}
                <div className="flex-1 z-10">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-black">
                        Master Digital <br /> Marketing in Just <br /> 3 Months
                    </h1>

                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                        Join our industry-focused Digital Marketing course and learn SEO,
                        Social Media, Google Ads, and more with hands-on projects. Build your
                        career with confidence!
                    </p>

                    <button className="bg-white text-black border-2 border-black cursor-pointer hover:border-[#D83030] rounded-full px-8 py-3 font-medium hover:bg-[#D83030] hover:text-white transition-all">
                        Enroll Now
                    </button>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="flex-1 relative flex justify-center items-center">
                    {/* Wrapper to control size */}
                    <Image
                        src={img}
                        alt="Digital Marketing Students"
                        className="object-contain md:object-cover w-full  top-2 md:mt-14 inset-0 "
                        priority
                    />
                </div>

            </div>
        </section>
    );
}
