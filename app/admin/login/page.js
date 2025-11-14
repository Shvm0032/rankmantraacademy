"use client";
import React, { useState } from "react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "dnd@rankmantra.com" && password === "Priyansh@8748**") {
      localStorage.setItem("admin-auth", "true");
      window.location.href = "/admin/dashboard";
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <form
        onSubmit={handleLogin}
        className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl w-[350px]"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Admin Login
        </h2>

        <div className="mb-4">
          <label className="text-white">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-2 rounded bg-white/20 text-white outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="text-white">Password</label>
          <input
            type="password"
            className="w-full mt-1 p-2 rounded bg-white/20 text-white outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-lg font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
