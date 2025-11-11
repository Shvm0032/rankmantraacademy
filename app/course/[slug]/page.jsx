"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import CareerGuidanceSection from "@/components/courses/CareerGuidanceSection";
import CertificationsSection from "@/components/courses/CertificationsSection";
import ComparisonSection from "@/components/courses/ComparisonSection";
import CourseFeesSection from "@/components/courses/CourseFeesSection";
import CoursesHero from "@/components/courses/CoursesHero";
import CurriculumSection from "@/components/courses/CurriculumSection";
import RightSideForm from "@/components/courses/RightSideForm";
import RightSideSummery from "@/components/courses/RightSideSummery";
import WayChooseUsSection from "@/components/courses/WayChooseUsSection";
import data from "@/components/courses/CoursesData";

const Page = () => {
  const { slug } = useParams(); 
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    if (slug && data?.length) {
      const matchedCourse = data.find((item) => item.slug === slug);
      setCourseData(matchedCourse || null);
    }
  }, [slug]);


  return (
    <div className="bg-white">
      <CoursesHero data={courseData} />

      <div className="md:flex items-start justify-between gap-5 relative max-w-7xl mx-auto py-4 md:py-16">
        <div className="w-full md:w-[70%] px-6">
          <WayChooseUsSection data={courseData} />
          <CurriculumSection data={courseData} />
          <ComparisonSection data={courseData} />
          <CertificationsSection data={courseData} />
          <CourseFeesSection data={courseData} />
          <CareerGuidanceSection data={courseData} />
        </div>

        <div className="w-full md:w-[30%] sticky top-5 px-6">
          <RightSideForm data={courseData} />
          <RightSideSummery data={courseData} />
        </div>
      </div>
    </div>
  );
};

export default Page;
