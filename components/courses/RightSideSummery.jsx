import React from "react";
import { Eye } from "lucide-react";

const RightSideSummery = () => {
  // ✅ Dynamic data array
  const faqs = [
    {
      question: "How long is this course?",
      answer:
        "The course duration is 1 to 1.5 months with practical training sessions.",
    },
    {
      question: "Do I need any technical knowledge?",
      answer:
        "No, this course is designed for beginners, and no prior experience is required.",
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes, you will receive a recognized digital marketing certification after completing the course.",
    },
    {
      question: "What is the course fee?",
      answer:
        "The course fee is affordable, and we also provide flexible payment options. Contact us for detailed pricing.",
    },
    {
      question: "Can I get a job after this course?",
      answer:
        "Yes, we offer job assistance and guidance to help you start your digital marketing career.",
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <p className="uppercase text-[#D83030] text-sm tracking-wider font-medium">
            Curious about the course? Our FAQ has everything you need!
          </p>
          <h2 className="text-4xl font-bold text-[#001F3F] mt-2">FAQs</h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-b border-gray-200 pb-4"
            >
              <summary className="flex items-center gap-3 cursor-pointer text-lg font-semibold text-[#001F3F]">
                <Eye className="text-[#D83030] w-5 h-5" />
                {index + 1}. {faq.question}
              </summary>
              <p className="text-gray-700 mt-3 ml-8">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideSummery;
