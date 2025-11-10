"use client";

export default function NewsletterSection() {
  return (
    <section className="w-full bg-[#D83030] py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* LEFT SIDE — Title */}
        <h2 className="text-white text-2xl md:text-[40px] font-bold text-center md:text-left">
          Newsletter Subscribe
        </h2>

        {/* RIGHT SIDE — Form */}
        <form className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full md:w-[350px] px-4 py-4 bg-white rounded-md text-[#032E42] text-[17px] outline-none border-none focus:ring-2 focus:ring-white placeholder:text-gray-500 placeholder:text-lg"
            required
          />
          <button
            type="submit"
            className="bg-[#032E42] text-white font-semibold px-6 py-4 rounded-md hover:bg-[#021f2d] transition-all duration-200 text-[17px]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
