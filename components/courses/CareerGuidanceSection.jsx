import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

const CareerGuidanceSection = () => {
    return (
        <section className="py-8 md:py-12 bg-white">
            <div className=" mx-auto px-6">
                <div className="bg-white  rounded-xl shadow flex flex-col md:flex-row justify-between items-center p-3 md:p-3">
                    {/* Left Side Content */}
                    <div className="md:w-2/3 space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                            Need guidance?{" "}
                            <span className="text-[#D83030] font-bold">
                                Talk to our career expert!
                            </span>
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            Get in touch with our program advisor & get your queries resolved.
                        </p>

                        <p className="text-gray-700 font-medium">
                            Reach out to our expert{" "}
                            <a
                                href="tel:7055586161"
                                className="text-[#D83030] hover:underline font-semibold"
                            >
                                7055586161
                            </a>
                        </p>
                    </div>

                    {/* Right Side Logo */}
                    <div className="md:w-1/3  md:mt-0 flex justify-center">
                        <Image
                            src={logo}
                            alt="Rank Mantra Academy Logo"
                            className="w-52 h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerGuidanceSection;
