"use client";
import { useState } from "react";
import DashboardContent from "./DashboardContent";
import CoursesContent from "./CoursesContent";
import AssignmentsContent from "./AssignmentsContent";
import GradesContent from "./Certificate";
import ProfileContent from "./ProfileContent";
import SettingsContent from "./SettingsContent";
import Image from "next/image";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Trophy,
  User,
  Bell,
  Settings,
  X,
} from "lucide-react";

export default function StudentDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "courses", label: "My Courses", icon: BookOpen },
    { id: "assignments", label: "Assignments", icon: FileText },
    { id: "certificate", label: "Certificate", icon: Trophy },
    { id: "profile", label: "Profile", icon: User },
    // { id: "settings", label: "Settings", icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent />;
      case "courses":
        return <CoursesContent />;
      case "assignments":
        return <AssignmentsContent />;
      case "certificate":
        return <GradesContent />;
      case "profile":
        return <ProfileContent />;
      case "settings":
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  const closeSidebar = () => setMobileSidebarOpen(false);

  return (
    <div className="min-h-screen bg-[#032E42] relative">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* LEFT SIDE */}
            <div className="flex items-center">
              {/* SP Button (Mobile Only) */}
              <button
                onClick={() => setMobileSidebarOpen(true)}
                className="md:hidden w-10 h-10 bg-[#032E42] rounded-lg flex items-center justify-center text-white font-bold"
              >
                SP
              </button>

              {/* SP Logo (Desktop Only) */}
              <div className="hidden md:flex w-10 h-10 bg-[#032E42] rounded-lg items-center justify-center text-white font-bold">
                SP
              </div>

              {/* Text — Hidden on Mobile */}
              <div className="ml-4 hidden md:block">
                <h1 className="text-xl font-bold text-gray-900">
                  Student Portal
                </h1>
                <p className="text-sm text-gray-500">Welcome back, Student!</p>
              </div>
            </div>

            {/* ADMIN LOGO */}
            <div className="block md:hidden">
              <Image
                src="/admin/logo-admin.png"
                alt="Logo"
                width={50}
                height={50}
              />
            </div>

            <div className="hidden md:block">
              <Image
                src="/admin/logo-admin.png"
                alt="Logo"
                width={70}
                height={70}
              />
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-gray-600 hover:text-gray-600">
                  <Bell className="text-xl cursor-pointer" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
                </button>
              </div>

              <button
                onClick={onLogout}
                className="cursor-pointer bg-[#D83030] text-white px-3 py-1 md:px-4 md:py-2 rounded-lg font-semibold transition-all duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR OVERLAY */}
      {mobileSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        ></div>
      )}

      {/* MOBILE SIDEBAR DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white border-r shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={closeSidebar}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                closeSidebar();
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                activeTab === item.id
                  ? "bg-linear-to-r from-purple-50 hover:cursor-pointer to-blue-50 text-purple-700 border border-purple-200"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* MAIN BODY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* SIDEBAR (Desktop Only) */}
          <div className="hidden md:block md:w-64 shrink-0">
            <div className="bg-[#D83030] rounded-2xl shadow-sm border p-6">
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center hover:cursor-pointer space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      activeTab === item.id
                        ? "bg-linear-to-r from-purple-50 to-blue-50  text-[#032E42] border border-purple-200"
                        : "text-gray-100 hover:bg-[#032E42]"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* QUICK STATS */}
            <div className="bg-[#D83030] rounded-2xl shadow-sm border p-6 mt-6">
              <h3 className="font-bold text-gray-100 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-100">Courses</span>
                  <span className="font-bold text-gray-100">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-100">Assignments</span>
                  <span className="font-bold text-gray-100">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-100">Avg. Grade</span>
                  <span className="font-bold text-gray-100">85%</span>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
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
