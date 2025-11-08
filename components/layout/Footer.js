"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      <p>© {year} My Website. All rights reserved.</p>
    </footer>
  );
}
