"use client";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import api from "@/utils/api";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    websiteUrl: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/contact-create", formData);
      if (res.status === 201) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          websiteUrl: "",
          message: "",
        });
      }
    } catch (err) {
      toast.error(
        err.response?.data?.error || "Something went wrong. Try again!"
      );
    } finally {
      setLoading(false);
    }
  };

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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-b border-gray-300 focus:border-[#D83030] w-full py-2 text-base outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="E-Mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-b border-gray-300 focus:border-[#D83030] w-full py-2 text-base outline-none"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="border-b border-gray-300 focus:border-[#D83030] w-full py-2 text-base outline-none"
              />
              <input
                type="text"
                name="websiteUrl"
                placeholder="Your Website"
                value={formData.websiteUrl}
                onChange={handleChange}
                className="border-b border-gray-300 focus:border-[#D83030] w-full py-2 text-base outline-none"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message Here"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="border-b border-gray-300 focus:border-[#D83030] w-full py-2 text-base outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#D83030] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#b82626] transition-all duration-200 w-full sm:w-auto disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit Now"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
