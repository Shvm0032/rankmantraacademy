"use client";
import { useState } from "react";
import Image from "next/image";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("admin-auth", "true");
      window.location.href = "/admin/dashboard";
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form
        onSubmit={handleLogin}
        className="bg-white/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-[350px] border border-white/20"
      >
        {/* Logo Top */}
        <div className="flex justify-center mb-6">
          <Image
            src="/admin/logo-admin.png"
            alt="Logo"
            width={80}
            height={80}
            className="drop-shadow-xl"
          />
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Admin Login
        </h2>

        <div className="mb-4">
          <label className="text-white">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-2 rounded bg-white/20 text-white placeholder-white/70 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter email"
          />
        </div>

        <div className="mb-4">
          <label className="text-white">Password</label>
          <input
            type="password"
            className="w-full mt-1 p-2 rounded bg-white/20 text-white placeholder-white/70 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#D83030] text-white py-2 rounded-lg font-semibold 
  transition-all duration-200 cursor-pointer
  hover:scale-95 active:scale-90"
        >
          Login
        </button>
      </form>
    </div>
  );
}
