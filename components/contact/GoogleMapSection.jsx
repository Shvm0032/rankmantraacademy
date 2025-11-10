"use client";

export default function GoogleMapSection() {
  return (
    <section className="w-full pb-20 pt-0  sm:pt-16 bg-[#ffffff] ">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Optional Heading */}
        <div className="text-center mb-8">
          <h4 className="text-[#D83030] uppercase tracking-widest text-md font-semibold mb-1">
            Find Us
          </h4>
          <h2 className="text-[#032E42] text-[32px] md:text-4xl font-extrabold">
            Our Location
          </h2>
        </div>

        {/* Map Container */}
        <div className="w-full h-[450px] md:h-[500px] overflow-hidden rounded-lg shadow-[0_5px_25px_rgba(0,0,0,0.08)]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.3514030560527!2d77.99218758636962!3d30.30122471820584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b21d8c72e57%3A0xa5945d4123ad72a!2sRankmantra%20Academy!5e1!3m2!1sen!2sin!4v1762770142207!5m2!1sen!2sin" 
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(100%) brightness(95%)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
