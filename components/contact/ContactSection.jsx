"use client";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 md:px-8">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <div>
            <h4 className="text-[#D83030] uppercase tracking-widest text-sm font-semibold mb-1">
              Contact Us
            </h4>
            <h2 className="text-[#032E42] text-3xl md:text-4xl font-extrabold mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Feel free to reach out! Whether you're curious about our courses or the enrollment process, 
              we're here to help you start your digital marketing journey.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-8 space-y-6">
            {[
              {
                icon: <MapPin size={26} />,
                title: "Visit Us:",
                detail: (
                  <>
                    2nd Floor, Shyam Tower, Sewla Kalan, Shimla Bypass Road, Pithuwala<br />
                    Dehradun – 248171
                  </>
                ),
              },
              {
                icon: <Mail size={26} />,
                title: "Mail Us:",
                detail: "info@rankmantraacademy.com",
              },
              {
                icon: <Phone size={26} />,
                title: "Phone:",
                detail: "+91 7055586161,+91 9557155778",
              },
            ].map((item, i) => (
         <div key={i} className="flex items-center gap-4">
  <div className="flex items-center justify-center w-12 h-12 bg-[#fff7f7] rounded-md shadow-sm text-[#D83030] shrink-0">
    {item.icon}
  </div>
  <div>
    <h3 className="font-semibold text-[#032E42] text-lg mb-1">{item.title}</h3>
    <p className="text-[#666666] text-base leading-relaxed">{item.detail}</p>
  </div>
</div>

            ))}
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white shadow-[0_5px_25px_rgba(0,0,0,0.08)] rounded-lg p-6 sm:p-8 md:p-10 border border-gray-100">
          <h3 className="text-[#032E42] text-2xl md:text-3xl font-bold mb-6">
            Drop Us a Line
          </h3>

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="border-b border-gray-300 focus:border-[#D83030] w-full py-2 text-base outline-none"
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="border-b border-gray-300 focus:border-[#D83030] w-full py-2 text-base outline-none"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Phone Number"
                className="border-b border-gray-300 focus:border-[#D83030] w-full py-2 text-base outline-none"
              />
              <input
                type="text"
                placeholder="Your Website"
                className="border-b border-gray-300 focus:border-[#D83030] w-full py-2 text-base outline-none"
              />
            </div>

            <textarea
              placeholder="Your Message Here"
              rows={4}
              className="border-b border-gray-300 focus:border-[#D83030] w-full py-2 text-base outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[#D83030] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#b82626] transition-all duration-200 w-full sm:w-auto"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
