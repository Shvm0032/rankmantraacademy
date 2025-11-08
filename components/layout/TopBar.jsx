import React from "react";
import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    PhoneCall,
} from "lucide-react";

const TopBar = () => {
    return (
        <>
            {/* ////////////////////////////////// TOP SCROLL BAR ////////////////////////////////////////// */}
            <div className="w-full bg-black text-white text-md py-1">
                <marquee
                    behavior="scroll"
                    direction="left"
                    scrollamount="6"
                    className="whitespace-nowrap"
                >
                    <span className="mx-8 text-md">
                        ✨ Grab Your Chance: 20-40% Scholarship for Early Enrollments! T&C
                        Apply
                    </span>
                    <span className="mx-8 text-md">
                        ✨ Grab Your Chance: 20-40% Scholarship for Early Enrollments! T&C
                        Apply
                    </span>
                </marquee>
            </div>

            {/* ////////////////////////////////// TOP Details BAR ////////////////////////////////////////// */}
            <div
                className={`w-full transition-transform duration-300 bg-[#032E42] text-white relative`}
            >
                <div className="flex flex-col md:flex-row items-stretch max-w-7xl mx-auto">
                    <div className="flex-1 flex items-center px-4 md:py-3">
                        <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                                {/* Email */}
                                <div className="flex items-center gap-2 mt-2 md:mt-0">
                                    <Mail size={22} strokeWidth={2} />
                                    <a
                                        href="mailto:info@rankmantraacademy.com"
                                        className="text-md font-medium"
                                    >
                                        info@rankmantraacademy.com
                                    </a>
                                </div>

                                <span className="hidden md:block h-6 w-px bg-gray-400"></span>

                                <div className="flex items-center gap-2">
                                    <Phone size={22} strokeWidth={2} />
                                    <a href="tel:+917055586161" className="text-md ">
                                        +91 7055586161
                                    </a>
                                    <span className="hidden md:block h-6 w-px bg-gray-400"></span>
                                </div>
                                <div className="flex items-center gap-2">

                                        <PhoneCall size={22} strokeWidth={2} />
                                        <a href="tel:+9557155778" className="text-md ">
                                            +91 9557155778
                                        </a>
                                </div>

                              
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE SOCIAL ICONS */}
                    <div className="w-full md:w-60 overflow-hidden">
                        <div className="absolute hidden md:block right-0 top-0 h-full z-10 bg-[#D83030] BackgroundDesign w-[30%]"></div>

                        <div
                            className="h-full flex items-center justify-center px-4 py-2 md:py-3"
                            style={{ color: "white" }}
                        >
                            {/* 👇 Hidden on Mobile (visible from md and up) */}
                            <div className="hidden md:flex items-center gap-8 z-10">
                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/people/Rankmantra-Academy/61569894464580/?mibextid=wwXIfr&rdid=6HDrxffwKZ1mzDq5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A5CYMyxhB%2F%3Fmibextid%3DwwXIfr"
                                    aria-label="facebook"
                                    target="_blank"
                                    className="hover:text-gray-200"
                                >
                                    <Facebook size={25} strokeWidth={1.5} />
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/rankmantraacademy/"
                                    target="_blank"
                                    className="hover:text-gray-200"
                                >
                                    <Instagram size={25} />
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/company/rankmantra-academy/"
                                    aria-label="linkedin"
                                    className="hover:text-gray-200"
                                    target="_blank"
                                >
                                    <Linkedin size={25} strokeWidth={1.5} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBar;
