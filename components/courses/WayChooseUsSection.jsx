"use client";
import {
    Award,
    Handshake,
    BookOpen,
    GraduationCap,
    Wallet,
    BarChart3,
} from "lucide-react";

export default function WayChooseUsSection({data}) {
    const features = [
        {
          
            title: "Esteemed Credentials",
            desc: "Get a recognized Digital Marketing Certificate after completing the course, valid for jobs & freelancing.",
        },
        {
            title: "Hands-on Training",
            desc: "Work on live projects & practical assignments to gain real-world experience.",
        },
        {
            title: "Beginner-Friendly Curriculum",
            desc: "No prior experience needed — we start from scratch and make you job-ready.",
        },
        {
            title: "Expert Faculty",
            desc: "Learn directly from industry professionals with years of digital marketing experience.",
        },
        {
            title: "Affordable Learning",
            desc: "Get quality training at an affordable fee with flexible payment options.",
        },
        {
            title: "Career Growth Support",
            desc: "Get guidance for freelancing, job opportunities, and building your online career.",
        },
    ];

    return (
        <section className=" bg-white text-black">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <div className="text-start mb-14">
                    <p className="text-gray-600 font-medium">Why choose us?</p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                        Key Features of{" "}
                        <span className="text-red-500">Rankmantra Academy</span>
                    </h2>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data?.keyFeature.map((feature, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-2xl p-6  shadow-sm hover:shadow-md transition-shadow bg-white"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-lg font-extrabold mb-2">
                                {feature.heading}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-[15px]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}