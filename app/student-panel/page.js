"use client";
import { useState } from "react";
import StudentDashboard from "../../components/studentpanel/StudentDashboard";
import Image from "next/image";

export default function StudentPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [step, setStep] = useState("mobile");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  const handleMobileSubmit = (e) => {
    e.preventDefault();
    if (mobile.length === 10) {
      setStep("otp");
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === "12345") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid OTP. Please enter 12345");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setStep("mobile");
    setMobile("");
    setOtp("");
  };

  if (isLoggedIn) {
    return <StudentDashboard onLogout={handleLogout} />;
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url("/admin/bg-admin.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full relative z-10">
        <div className="md:flex">
          {/* Left Section */}
          <div
            className="md:w-1/2 p-8 text-white flex flex-col justify-center relative bg-cover bg-center"
            style={{
              backgroundImage: "url('/admin/bg-panel.jpg')",
            }}
          >
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
            </div>

            <div className="text-center relative z-10">
              <div className="flex justify-center mb-6">
                <div className="text-center">
                  <Image
                    src="/admin/logo-admin.png"
                    alt="Rankmantra Academy Logo"
                    width={80}
                    height={80}
                    className="mx-auto mb-4"
                  />

                  <div className="text-4xl text-black font-bold tracking-wider mb-2">
                    Rankmantra
                  </div>
                  <div className="text-lg text-gray-700 font-medium tracking-widest">
                    Academy
                  </div>
                </div>
              </div>

              <h2 className="text-2xl text-gray-600 font-bold mb-6 mt-8">
                Future-Proof your Career with us!
              </h2>

              <p className="text-lg text-gray-600 opacity-90 leading-relaxed">
                Join thousands of students who have transformed their careers
                through our industry-relevant courses and expert guidance.
              </p>

              <div className="mt-8 space-y-3 text-left max-w-md mx-auto">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Industry Expert Trainers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Hands-on Projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>100% Placement Assistance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Login Section */}
          <div className="md:w-1/2 p-8">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  {step === "mobile" ? "Welcome Back!" : "Enter OTP"}
                </h1>
                <p className="text-gray-600">
                  {step === "mobile"
                    ? "Please enter your phone number to login"
                    : "Enter the OTP sent to your mobile"}
                </p>
              </div>

              {step === "mobile" && (
                <form onSubmit={handleMobileSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-700 font-medium">+91</span>
                      </div>
                      <input
                        type="tel"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Enter your 10-digit mobile number"
                        className="block text-gray-700 w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5BFF] focus:border-transparent transition-all duration-200"
                        maxLength={10}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#032E42] text-white py-3 rounded-lg font-semibold hover:bg-[#D83030] transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Send OTP
                  </button>
                </form>
              )}

              {step === "otp" && (
                <form onSubmit={handleOtpSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Enter OTP
                    </label>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter 5-digit OTP"
                      className="w-full text-gray-700 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5BFF] focus:border-transparent transition-all duration-200 text-center text-lg font-semibold"
                      maxLength={5}
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center">
                      Demo OTP: <span className="font-mono">12345</span>
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full  bg-[#2D5BFF] text- py-3 rounded-lg font-semibold hover:bg-[#1E40AF] transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Verify OTP
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep("mobile")}
                    className="w-full text-gray-600 py-2 rounded-lg font-medium hover:text-[#2D5BFF] transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>←</span>
                    <span>Back to mobile number</span>
                  </button>
                </form>
              )}

              <div className="mt-12 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-500">
                 Copyright © 2025 Rankmantra Academy. All Rights Reserved.
                  <br />
                  Website Designed and Developed by Rank Mantra.
                </p>
              </div>

              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs text-yellow-800 text-center">
                  <strong>Demo:</strong> Use any 10-digit mobile number and OTP:{" "}
                  <strong>12345</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
