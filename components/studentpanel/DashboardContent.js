import {
  BookOpen,
  FileText,
  Hourglass,
  Target,
  LoaderCircle,
  Calendar,
  Clock,
  UserPlus,
  CheckCheck,
  Users,
} from "lucide-react";
import api from "@/utils/api";
import { useEffect, useState } from "react";

export default function DashboardContent() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get(`/courses`);
        console.log("data",res.data)
        setCourse(res.data.courses);
      } catch (error) {
        console.log("error fetch the data into the dashboard page", error);
      }
    };
    fetchCourse();
  }, []);
  const stats = [
    { label: "Total Courses", value: "5", color: "purple", icon: BookOpen },
  
    {
      label: "Course Duration",
      value: "2 month",
      color: "green",
      icon: Hourglass,
    },
    {
      label: "Course Progress",
      value: "85%",
      color: "blue",
      icon: LoaderCircle,
    },
    {
      label: "Join Date",
      value: "12/11/2025",
      color: "red",
      icon: Calendar,
    },
  ];

 

  const classes = [
    {
      topic: "Introduction to React.js",
      date: "25 Nov 2025",
      time: "10:00 AM - 11:30 AM",
    },
    {
      topic: "JavaScript Advanced Functions",
      date: "27 Nov 2025",
      time: "02:00 PM - 03:30 PM",
    },
    {
      topic: "UI/UX Design Fundamentals",
      date: "29 Nov 2025",
      time: "04:00 PM - 05:00 PM",
    },
  ];
  
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
        <div className="text-sm text-gray-500">Last updated: Today</div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-linear-to-br from-white to-gray-50 border rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </p>
                <p className={`text-xl font-bold text-${stat.color}-600 mt-2`}>
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Enroll Course */}
      <div className="w-full bg-gray-50 py-10 px-4">
        {/* Section Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Enroll Courses
        </h2>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {course.map((course, index) => (
            <div
              key={index}
              className="bg-[#EFF6FF] p-5 rounded-xl shadow-md border hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {course.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Upcoming classes */}
      <div className="w-full bg-gray-50 py-10 px-4">
        {/* Section Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Upcoming Classes
        </h2>

        {/* Class Cards */}
        <div className="space-y-5">
          {classes.map((cls, index) => (
            <div
              key={index}
              className="bg-[#F3E8FF] shadow-md border rounded-xl p-5 hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {cls.topic}
              </h3>

              <div className="mt-2 text-gray-600 text-sm">
                <p>
                  <span className="font-semibold text-gray-700">Date:</span>{" "}
                  {cls.date}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Time:</span>{" "}
                  {cls.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
