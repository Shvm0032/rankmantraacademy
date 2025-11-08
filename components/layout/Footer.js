"use client";
import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Linkedin,
  Instagram,
  MessageCircle,
  ArrowUp,
} from "lucide-react";
import footerbg from "@/public/footer11.webp";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${footerbg.src}')` }}
      ></div>

      {/* Content */}
      <div className="relative container max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1 - About */}
        <div>
          <img
            src="/footerLogo.png"
            alt="Rankmantra Academy"
            className="w-40 mb-6"
          />
          <p className="text-base leading-relaxed mb-6">
            Rankmantra Academy – Master Digital Marketing with expert-led
            courses, hands-on training, and real-world insights. Your journey to
            success starts here!
          </p>
          <button className="bg-[#D83030] cursor-pointer hover:bg-[#a42222] text-white px-8 py-3 rounded-md  text-base">
            DISCOVER MORE
          </button>
        </div>

        {/* Column 2 - Useful Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Useful Links</h3>
          <ul className="space-y-4 text-lg">
            <li>
              <a href="/" className="hover:text-[#D83030] transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#D83030] transition">
                About
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-[#D83030] transition">
                Courses
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#D83030] transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/reviews" className="hover:text-[#D83030] transition">
                Student Review
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Courses */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Courses</h3>
          <ul className="space-y-4 text-lg">
            <li>Basic Digital Marketing Course</li>
            <li>Advance Digital Marketing Course</li>
            <li>Performance Marketing Course</li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <p>
                {" "}
                <MapPin className="text-[#D83030] w-6 h-6" />{" "}
              </p>
              2nd Floor, Shyam Tower, Sewla Kalan, Shimla Bypass Road,
              Pithuwala, Dehradun - 248171
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-[#D83030] w-6 h-6" />
              +91 7055586161 , +91 9557155778
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-[#D83030] w-6 h-6" />
              info@rankmantraacademy.com
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="text-[#D83030] w-6 h-6" />
              +91 7055586161 , +91 9557155778
            </li>
            <li className="flex items-center gap-3">
              <Clock className="text-[#D83030] w-6 h-6" />
              10:00 - 18:00 Mon - Sat
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/20 max-w-7xl mx-auto mt-10 py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-base text-center md:text-left">
          Copyright © {year} Rankmantra Academy. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            target="_blank"
            href="https://www.facebook.com/people/Rankmantra-Academy/61569894464580/?mibextid=wwXIfr&rdid=6HDrxffwKZ1mzDq5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A5CYMyxhB%2F%3Fmibextid%3DwwXIfr"
            className="bg-[#D83030] hover:bg-[#D83030] p-3 rounded-md transition"
          >
            <Facebook size={20} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/rankmantra-academy/"
            className="bg-[#D83030] hover:bg-[#D83030] p-3 rounded-md transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/rankmantraacademy/"
            className="bg-[#D83030] hover:bg-[#D83030] p-3 rounded-md transition"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Floating WhatsApp & Scroll Top */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50 ">
        <a
          href="https://wa.me/917055586161"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
        >
          <MessageCircle size={24} />
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#D83030] hover:bg-[#D83030] text-white p-4 rounded-full shadow-lg transition"
        >
          <ArrowUp size={22} />
        </button>
      </div>
    </footer>
  );
}
