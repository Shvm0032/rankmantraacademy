"use client";
import { useState } from "react";
import Image from "next/image";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "dnd@rankmantra.com" && password === "Priyansh@8748**") {
      document.cookie = "admin-auth=true; path=/; max-age=86400";
      window.location.href = "/admin/dashboard";
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-white/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-[350px] border border-white/20"
      >
        {/* Logo */}
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

        {/* Email */}
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

        {/* Password + Eye Toggle */}
        <div className="mb-4">
          <label className="text-white">Password</label>

          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              className="w-full mt-1 p-2 pr-10 rounded bg-white/20 text-white placeholder-white/70 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
            />

            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-black cursor-pointer"
            >
              {showPass ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </button>
          </div>
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
