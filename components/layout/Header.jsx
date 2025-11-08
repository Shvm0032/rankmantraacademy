"use client";
import TopBar from "./TopBar";
import HeaderPop from "./HeaderPop";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import dotsDesign from "@/public/headerDotsDesign.png";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  useEffect(() => {
    if (showPopUp || menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showPopUp, menuOpen]);

  const menuLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    {
      name: "COURSES",
      dropdown: [
        { name: "Yoga", href: "/courses/yoga" },
        { name: "Pilates", href: "/courses/pilates" },
        { name: "Rehab", href: "/courses/rehab" },
      ],
    },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="w-full shadow-md z-40 relative">
      <TopBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={80} height={80} />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            {menuLinks.map((link) => (
              <li key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-black hover:text-[#D83030] font-[500] text-md"
                      onClick={() => setShowCourses((prev) => !prev)}
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${showCourses ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {/* Dropdown */}
                    <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-40">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-black hover:text-[#D83030] font-[500] text-md"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Right Icons */}
        <div className="hidden md:flex gap-4 items-center">
          <Image
            onClick={() => setShowPopUp(true)}
            src={dotsDesign}
            alt="Dots"
            className="h-[35px] object-contain cursor-pointer"
            width={100}
            height={100}
          />

          <Link
            href="tel:+917055586161"
            className="bg-[#1273eb] text-white px-5 py-3 rounded-full flex items-center justify-center">
            Book a Demo Class
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <Link
            href="tel:+917055586161"
            className="bg-[#1273eb] text-white px-2 py-3 rounded-full w-full text-sm flex items-center justify-center">
            Book a Demo Class
          </Link>
          <button onClick={() => setMenuOpen(true)}>
            <Image
              src={dotsDesign}
              alt="Dots"
              className="h-[25px] object-contain cursor-pointer"
              width={100}
              height={100}
            />
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-500 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <Image src={logo} alt="Logo" width={70} height={70} />
          <button onClick={() => setMenuOpen(false)}>
            <Image
              src={dotsDesign}
              alt="Dots"
              className="h-[25px] object-contain cursor-pointer"
              width={100}
              height={100}
            />
          </button>
        </div>

        <ul className="flex flex-col space-y-4 p-4">
          {menuLinks.map((link) => (
            <li key={link.name}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setShowCourses(!showCourses)}
                    className="flex justify-between items-center w-full text-left text-black font-[500]"
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${showCourses ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {showCourses && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="block text-gray-700 text-sm hover:text-[#D83030]"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-black hover:text-[#D83030] font-[500]"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}


        </ul>
      </div>

      {/* HeaderPop (Hidden on Mobile) */}
      <div className="hidden md:block">
        <HeaderPop isOpen={showPopUp} onClose={() => setShowPopUp(false)} />
      </div>
    </header>
  );
}
