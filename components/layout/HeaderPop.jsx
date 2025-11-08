"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/public/logo.png";
import dotsDesign from "@/public/headerDotsDesign.png";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

const HeaderPop = ({ onClose, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex bg-white/50  overflow-hidden"
        >
          {/* Left Transparent Area (click to close) */}
          <div className="flex-1 cursor-pointer" onClick={onClose}></div>

          {/* White Background Slide */}
          <motion.div
           
            className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white"
          />

          {/* Sidebar Slide */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{
              delay: 0.25,
              duration: 0.7,
              ease: [0.68, -0.55, 0.27, 1.55], // spring bounce effect
            }}
            className="relative z-10 w-full sm:w-[420px] shadow-xl p-6 py-16 overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-[50px] right-[35px] cursor-pointer text-gray-500 hover:text-black"
            >
              <Image src={dotsDesign} alt="Close" width={50} height={50} />
            </button>

            {/* Logo */}
            <div className="flex items-start mb-4 mt-8">
              <Image
                src={logo}
                alt="Rankmantra Academy"
                className="w-[230px] object-contain"
              />
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-gray-900 text-start leading-snug">
              Rankmantra Academy – Master Digital Marketing with expert-led
              courses, hands-on training, and real-world insights. Your journey
              to success starts here!
            </h2>

            {/* Info Section */}
            <div className="mt-6 space-y-7 text-md text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="text-red-600 w-5 h-5 mt-1" />
                <p>
                  2nd Floor, Shyam Tower, Sewla Kalan, Shimla Bypass Road,
                  Pithuwala Dehradun - 248171
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-red-600 w-5 h-5" />
                <a href="tel:+919557155778" className="hover:text-red-600">
                  +91 9557155778
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-red-600 w-5 h-5" />
                <a
                  href="mailto:info@rankmantraacademy.com"
                  className="hover:text-red-600"
                >
                  info@rankmantraacademy.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="text-red-600 w-5 h-5" />
                <a
                  href="https://wa.me/919557155778"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600"
                >
                  +91 9557155778
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-red-600 w-5 h-5" />
                <p>10:00 - 18:00 Mon - Sat</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.facebook.com/people/Rankmantra-Academy/61569894464580/?mibextid=wwXIfr&rdid=6HDrxffwKZ1mzDq5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A5CYMyxhB%2F%3Fmibextid%3DwwXIfr" 
                target="_blank"
                className="bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/rankmantra-academy/"
                target="_blank"
                className="bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/rankmantraacademy/"
                target="_blank"
                className="bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* WhatsApp Floating Button */}
            <a
              href="https://wa.me/919557155778"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg"
            >
              <MessageCircle size={24} />
            </a>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default HeaderPop;
