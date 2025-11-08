import React from "react";
import img from "@/public/footer11.webp"

const HomeContact = () => {
    return (
        <section className="bg-white py-8 md:py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div
                        style={{
                            backgroundImage: `url('${img.src}')`
                        }}
                        className=" text-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                            Quick Contact !
                        </h2>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 bg-white py-3 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#D83030]"
                            />

                            <input
                                type="email"
                                placeholder="E-Mail"
                                className="w-full px-4 py-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#D83030]"
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full px-4 py-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#D83030]"
                            />

                            <textarea
                                rows="5"
                                placeholder="Enter Query Here"
                                className="w-full px-4 py-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#D83030]"
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-[#D83030] cursor-pointer text-white font-semibold px-8 py-3 rounded-full hover:bg-[#b82929] transition duration-300"
                            >
                                SUBMIT NOW
                            </button>
                        </form>
                    </div>

                    {/* Google Map */}
                    <div className="rounded-xl overflow-hidden shadow-lg h-[500px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19486.489442492755!2d77.97354919873327!3d30.300972829663262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b21d8c72e57%3A0xa5945d4123ad72a!2sRankmantra%20Academy!5e0!3m2!1sen!2sus!4v1762595376272!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;
