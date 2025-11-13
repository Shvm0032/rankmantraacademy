"use client";
import React from "react";
import {
  Award,
  BookOpen,
  Briefcase,
  Users,
  FileBadge,
  Layers,
  ThumbsUp,
} from "lucide-react";

const ComparisonSection = ({data}) => {
 

  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto ">
        <p className="text-gray-500 text-lg font-semibold mb-2">
          Rankmantra Academy vs other institutes
        </p>
        <h2 className="text-3xl text-black sm:text-4xl font-bold mb-8">
          Our Digital Marketing Course vs{" "}
          <span className="text-red-600">Other Institutes</span>
        </h2>

        {/* Table Header */}
        <div className="grid grid-cols-3 bg-gray-50 font-semibold text-lg py-3 px-4 border-b">
          <div></div>
          <div className="text-red-600 text-center">Rankmantra Academy</div>
          <div className="text-center text-gray-600">Other Institutes</div>
        </div>

        {/* Data Rows */}
        {data?.comparison?.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-3 items-center py-4 px-4 ${
              index % 2 === 0 ? "bg-gray-50" : "bg-white"
            } border-b`}
          >
            {/* Title + Icon */}
            <div className="flex items-center gap-2 font-semibold text-gray-800">
              {item?.icon}
              {item?.title}
            </div>

            {/* Rankmantra Column */}
            <div className=" flex  gap-2 items-center text-gray-700">
              <ThumbsUp className="text-green-500 w-4 h-4 mb-1" />
              <span>{item?.rankmantra}</span>
            </div>

            {/* Other Institutes Column */}
            <div className=" flex  gap-2 items-center text-gray-500">
              <ThumbsUp className="text-gray-300 w-4 h-4 mb-1" />
              <span>{item?.others}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComparisonSection;
