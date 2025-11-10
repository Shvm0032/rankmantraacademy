"use client";
import React from "react";
import Image from "next/image";
import { Award, Briefcase, ShieldCheck } from "lucide-react";
import teamImage from "@/public/home/course1Certifications.jpg"; // <-- apni image ka path yaha dalna

const CertificationsSection = () => {
    const certifications = [
        {
            icon: <Award className="w-7 h-7 text-red-600" />,
            title: "Get Certified",
            description:
                "Earn a recognized certificate in Digital Marketing from industry experts.",
        },
        {
            icon: <Briefcase className="w-7 h-7 text-red-600" />,
            title: "Hands-on Experience",
            description:
                "Work on live projects and practical assignments.",
        },
        {
            icon: <ShieldCheck className="w-7 h-7 text-red-600" />,
            title: "Industry recognition",
            description:
                "Gain additional certifications to boost your profile.",
        },
    ];

    return (
        <section className="py-8 md:py-16 bg-white">
            <p className="text-gray-500 text-sm mb-2">
                How will it benefit your career?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">
                Get certified by{" "}
                <span className="text-red-600">Rankmantra Academy</span>
            </h2>
            <div className="max-w-6xl mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* LEFT SIDE */}
                <div>


                    <div className="space-y-8">
                        {certifications.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0">{item.icon}</div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-700">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE - IMAGE */}
                <div className="w-full flex justify-center">
                    <div className="rounded-md overflow-hidden shadow-lg">
                        <Image
                            src={teamImage}
                            alt="Rankmantra Academy Team"
                            className="w-full md:h-[400px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
