"use client";
import { useState } from "react";
import DashboardContent from "./DashboardContent";
import CoursesContent from "./CoursesContent";
import AssignmentsContent from "./AssignmentsContent";
import GradesContent from "./GradesContent";
import ProfileContent from "./ProfileContent";
import SettingsContent from "./SettingsContent";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Trophy,
  User,
  Settings,
} from "lucide-react";

export default function StudentDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState("dashboard");

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "courses", label: "My Courses", icon: BookOpen },
    { id: "assignments", label: "Assignments", icon: FileText },
    { id: "grades", label: "Grades", icon: Trophy },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent />;
      case "courses":
        return <CoursesContent />;
      case "assignments":
        return <AssignmentsContent />;
      case "grades":
        return <GradesContent />;
      case "profile":
        return <ProfileContent />;
      case "settings":
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="shrink-0">
                <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  E
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-bold text-gray-900">
                  Student Portal
                </h1>
                <p className="text-sm text-gray-500">Welcome back, Student!</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <span className="text-xl">🔔</span>
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
                </button>
              </div>
              <button
                onClick={onLogout}
                className="bg-linear-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      activeTab === item.id
                        ? "bg-linear-to-r from-purple-50 to-blue-50 text-purple-700 border border-purple-200"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-sm border p-6 mt-6">
              <h3 className="font-bold text-gray-800 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Courses</span>
                  <span className="font-bold text-purple-600">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Assignments</span>
                  <span className="font-bold text-blue-600">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Avg. Grade</span>
                  <span className="font-bold text-green-600">85%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
