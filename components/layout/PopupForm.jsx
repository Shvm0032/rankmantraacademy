"use client";
import { useState } from "react";
import Image from "next/image";
import img from "@/public/PopupImage.jpg"

export default function PopupForm({onClose}) {

    return (
        <>

            <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
                <div className="bg-white rounded-md shadow-2xl w-[90%] md:w-[60%] lg:w-[50%] relative overflow-hidden">
                    {/* Close Button */}
                    <button
                        onClick={() => onClose()}
                        className="absolute top-3 cursor-pointer right-3 text-black text-2xl font-bold hover:text-red-600"
                    >
                        &times;
                    </button>

                    <div className="grid md:grid-cols-2">
                        {/* Left Image */}
                        <div className="hidden md:block p-2">
                            <Image
                                src={img}
                                alt="Marketing Team"
                                width={500}
                                height={500}
                                className="object-cover h-full w-full rounded-lg "
                            />
                        </div>

                        {/* Right Form */}
                        <div className="p-8 flex flex-col justify-center">
                            <h2 className="text-xl font-medium text-[#D83030] mb-6 text-center">
                                Start Your Digital Marketing Journey
                            </h2>

                            <form className="space-y-5">
                                <div>
                                   
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full border-b border-black focus:outline-none focus:border-[#D83030] p-2"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="w-full border-b border-black focus:outline-none focus:border-[#D83030] p-2"
                                    />
                                </div>

                                <div>
                                   
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full border-b border-black focus:outline-none focus:border-[#D83030] p-2"
                                    />
                                </div>

                                <div>
                                    <select
                                        className="w-full border-b border-black focus:outline-none focus:border-[#D83030] p-2"
                                    >
                                        <option disabled>Select Course</option>
                                        <option value="Basic Digital Marketing Course"> Basic Digital Marketing Course</option>
                                        <option value="Advance Digital Marketing Course"> Advance Digital Marketing Course</option>
                                        <option value="Performance Marketing Course"> Performance Marketing Course</option>
                                        <option>Google Ads</option>
                                    </select>
                                </div>
                                <div className="text-center pt-3">
                                    <button
                                        type="submit"
                                        className="bg-[#D83030] text-white px-10 py-2 rounded-full hover:bg-red-700 transition-all duration-200"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
