"use client";

import { useEffect, useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  PhoneCall,
} from "lucide-react";

export default function Header() {
  // cycle offers every 3s
  useEffect(() => {
    const id = setInterval(() => {
      setOfferIndex((i) => (i + 1) % offers.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // scroll behaviour: hide top two bars on scroll and only keep bottom sticky
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // modal / drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Courses dropdown
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <header className="w-full shadow-md z-40">
      {/* Top offer bar */}
      <div
        className={`w-full overflow-hidden transition-transform duration-300 ${
          scrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="bg-black text-white text-sm py-1 flex items-center justify-center">
          <div className="relative w-full overflow-hidden">
            <div className="whitespace-nowrap animate-marquee">
              <span className="mx-8">🔥 Flat 50% off on all courses!</span>
              <span className="mx-8">
                🚀 Enroll now & get free study material!
              </span>
              <span className="mx-8">🎓 Join today and boost your career!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Colored info bar (split left/right with diagonal separator) */}
      <div
        className={`w-full transition-transform duration-300 ${
          scrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex flex-col md:flex-row items-stretch relative">
          {/* LEFT SIDE */}
          <div
            className="flex-1 flex items-center px-4 py-2 md:py-3"
            style={{ background: "#032E42", color: "white" }}
          >
            <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                {/* Email */}
                <div className="flex items-center gap-2">
                  <Mail size={16} strokeWidth={1.5} />
                  <span className="text-sm font-medium">email@domain.com</span>
                </div>

                {/* Separator Line */}
                <span className="hidden md:block h-6 w-px bg-gray-400"></span>

                {/* Phone Numbers */}
                <div className="flex items-center gap-3">
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <Phone size={16} strokeWidth={1.5} />
                    <a
                      href="tel:+911234567890"
                      className="text-sm hover:underline"
                    >
                      +91 12345 67890
                    </a>

                    {/* Line between numbers */}
                    <span className="hidden md:block h-6 w-px bg-gray-400"></span>
                    <PhoneCall size={16} strokeWidth={1.5} />

                    <a
                      href="tel:+919876543210"
                      className="text-sm hover:underline"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE WITH SLASH SEPARATION */}
          <div className="relative w-full md:w-60 overflow-hidden">
            {/* Slash Divider */}
            <div className="absolute left-[-25px] top-0 h-full w-[50px] z-10">
              <svg
                viewBox="0 0 50 100"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                <polygon points="0,0 50,0 0,200" fill="#032E42" />
              </svg>
            </div>

            {/* Red Section with Social Icons */}
            <div
              className="h-full flex items-center justify-center px-4 py-2 md:py-3"
              style={{ background: "#D83030", color: "white" }}
            >
              <div className="flex items-center gap-4">
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="facebook"
                  className="hover:text-gray-200"
                >
                  <Facebook size={18} strokeWidth={1.5} />
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  aria-label="twitter"
                  className="hover:text-gray-200"
                >
                  <Twitter size={18} strokeWidth={1.5} />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="instagram"
                  className="hover:text-gray-200"
                >
                  <Instagram size={18} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav - sticky on top when scroll */}
      <div className="sticky top-0 bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            {/* LEFT: Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#032E42] text-white rounded flex items-center justify-center font-bold">
                  L
                </div>
                <span className="font-semibold text-lg">MyWebsite</span>
              </a>
            </div>

            {/* CENTER: Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="/" className="hover:text-[#D83030]">
                Home
              </a>
              <a href="/about" className="hover:text-[#D83030]">
                About
              </a>

              <div className="relative">
                <button
                  onClick={() => setCoursesOpen((s) => !s)}
                  className="flex items-center gap-2 focus:outline-none"
                  aria-expanded={coursesOpen}
                >
                  Courses
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </button>

                {/* dropdown */}
                {coursesOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white border rounded shadow-md min-w-[200px] py-2">
                    <a
                      href="/courses/one"
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      Course One
                    </a>
                    <a
                      href="/courses/two"
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      Course Two
                    </a>
                    <a
                      href="/courses/three"
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      Course Three
                    </a>
                  </div>
                )}
              </div>

              <a href="/contact" className="hover:text-[#D83030]">
                Contact
              </a>
              <a href="/reviews" className="hover:text-[#D83030]">
                Student Review
              </a>
            </div>

            {/* RIGHT: three-dot square button (opens drawer) */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDrawerOpen(true)}
                aria-label="open details"
                className="w-10 h-10 border rounded grid place-items-center"
                title="More"
              >
                {/* square with 3 vertical dots representation */}
                <div className="flex flex-col items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full block"></span>
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full block"></span>
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full block"></span>
                </div>
              </button>

              {/* Mobile menu: simple toggle to show nav (if you want) */}
              <div className="md:hidden">
                {/* show mobile simplified menu (you can expand if needed) */}
                <details className="relative">
                  <summary className="cursor-pointer px-3 py-2 rounded border">
                    Menu
                  </summary>
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow p-2">
                    <a href="/" className="block py-1">
                      Home
                    </a>
                    <a href="/about" className="block py-1">
                      About
                    </a>
                    <a href="/courses" className="block py-1">
                      Courses
                    </a>
                    <a href="/contact" className="block py-1">
                      Contact
                    </a>
                    <a href="/reviews" className="block py-1">
                      Student Review
                    </a>
                  </div>
                </details>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Drawer / Right-side modal */}
      <div
        className={`fixed inset-y-0 right-0 w-full md:w-96 bg-white z-60 transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#032E42] text-white rounded grid place-items-center font-bold">
                L
              </div>
              <div>
                <h3 className="font-semibold">MyWebsite</h3>
                <p className="text-sm text-gray-500">Learn. Grow. Succeed.</p>
              </div>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              aria-label="Close"
              className="p-2"
            >
              ✕
            </button>
          </div>

          <div className="p-6 overflow-auto flex-1">
            <p className="mb-4 text-gray-700">
              We provide high-quality courses and hands-on workshops. Grow your
              skills with expert instructors and practical projects.
            </p>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-sm">Address: 123, Learning Lane, City</p>
              <p className="text-sm">Phone: +91 12345 67890</p>
              <p className="text-sm">Email: email@domain.com</p>
              <p className="text-sm">Timing: Mon - Sat, 9:00 AM - 6:00 PM</p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="facebook"
                  className="p-2 border rounded"
                >
                  FB
                </a>
                <a href="#" aria-label="twitter" className="p-2 border rounded">
                  TW
                </a>
                <a
                  href="#"
                  aria-label="instagram"
                  className="p-2 border rounded"
                >
                  IG
                </a>
              </div>
            </div>

            <div>
              <a
                href="/book-demo"
                className="inline-block w-full text-center py-3 bg-[#032E42] text-white rounded"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for drawer */}
      {drawerOpen && (
        <button
          onClick={() => setDrawerOpen(false)}
          aria-hidden
          className="fixed inset-0 bg-black/30 z-50"
        />
      )}
    </header>
  );
}
