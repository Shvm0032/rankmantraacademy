"use client";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full py-20 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 md:px-8">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* Headings */}
          <div>
            <h4 className="text-[#D83030] uppercase tracking-widest text-md font-semibold mb-1">
              Contact Us
            </h4>
            <h2 className="text-[#032E42] text-[36px] md:text-4xl font-extrabold mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Feel free to reach out! Whether you're curious about our courses, the enrollment process, 
              or anything else, we're here to help. Our team is ready to provide you with all the information 
              you need to get started on your digital marketing journey.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-10 space-y-8">
            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center w-14 h-14 bg-[#fff7f7] rounded-lg shadow-sm text-[#D83030]">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-[#032E42] text-[17px] mb-1">Visit Us:</h3>
                <p className="text-[#666666] text-lg leading-relaxed">
                  2nd Floor, Shyam Tower, Sewla Kalan, Shimla Bypass Road, Pithuwala<br />
                  Dehradun – 248171
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center w-14 h-14 bg-[#fff7f7] rounded-lg shadow-sm text-[#D83030]">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-[#032E42] text-[17px] mb-1">Mail Us:</h3>
                <p className="text-[#666666] text-lg leading-relaxed">
                  info@rankmantraacademy.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center w-14 h-14 bg-[#fff7f7] rounded-lg shadow-sm text-[#D83030]">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-[#032E42] text-[17px] mb-1">Phone:</h3>
                <p className="text-[#666666] text-lg leading-relaxed">
                  +91 7055586161, +91 9557155778
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#ffffff] shadow-[0_5px_25px_rgba(0,0,0,0.08)] rounded-lg p-10 border border-gray-100">
          <h3 className="text-[#032E42] text-3xl font-bold mb-8">Drop Us a Line</h3>

          <form className="space-y-6">
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="border-b border-gray-300 focus:border-[#D83030] transition-colors w-full py-2 text-lg outline-none"
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="border-b border-gray-300 focus:border-[#D83030] transition-colors w-full py-2 text-lg outline-none"
              />
            </div>

            {/* Phone & Website */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Phone Number"
                className="border-b border-gray-300 focus:border-[#D83030] transition-colors w-full py-2 text-lg outline-none"
              />
              <input
                type="text"
                placeholder="Your Website"
                className="border-b border-gray-300 focus:border-[#D83030] transition-colors w-full py-2 text-lg outline-none"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Your Message Here"
              rows={4}
              className="border-b border-gray-300 focus:border-[#D83030] transition-colors w-full py-2 text-lg outline-none resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#D83030] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#b82626] transition-all duration-200"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
