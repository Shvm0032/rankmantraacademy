"use client";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section
      className="w-full h-[48vh] md:h-[50vh] bg-content bg-right bg-no-repeat flex flex-col items-center justify-center px-4 text-white"
      style={{ backgroundImage: "url('/about/inrrers.webp')" }} 
    >
      {/* Heading */}
      <h1 className="text-3xl text-[#032E42] md:text-6xl text-shadow-black font-extrabold  text-center">
        About
      </h1>

      {/* Subheading */}
      <p className="flex items-center gap-2 text-sm md:text-base font-medium">
        <Link href="/" className="hover:underline text-[#032E42]">
          RankMantra Academy
        </Link>

        <span className="font-semibold text-[#D83030]">/</span>

        <span className="text-[#032E42]">About</span>
      </p>
    </section>
  );
}
