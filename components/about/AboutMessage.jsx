"use client";

import Image from "next/image";

export default function AboutMessage() {
  return (
    <section className="w-full bg-white border-t px-6 py-12  mx-auto">
      {/* ✅ Top Heading */}
      <h2 className="md:text-5xl text-md  text-[#D83030] font-bold text-center">
        Messages from the Academy
      </h2>

      {/* ✅ Divider */}
      <div className="w-24 h-1 bg-[#0A2E3F] mx-auto my-4 rounded-full"></div>

      {/* ✅ MAIN WRAPPER */}
      <div className="space-y-12">
        {/* ✅ BLOCK 1 (Left Image, Right Content) */}
        <div className="w-full border-2 shadow-2xl rounded-2xl p-6">
          <div className="flex gap-10 items-stretch">
            {/* ✅ LEFT IMAGE BOX */}
            <div className="flex w-[40%] flex-col items-center text-center">
              <div className="w-full h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/about/abhisheksir.webp"
                  alt="Person 1"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <h3 className="text-2xl text-black font-semibold mt-1">
                Mr. Abhishek Anand
              </h3>
              <p className="text-xl text-gray-600">Co-Founder</p>
            </div>

            {/* ✅ RIGHT TEXT BOX */}
            <div className="flex flex-col w-[60%] justify-center">
              <h3 className="text-3xl text-black font-bold mb-4 leading-tight">
                Co-Founder Message
              </h3>

              <p className="text-gray-800 text-justify text-lg leading-relaxed mb-4">
                <span className="font-semibold">At RankMantra</span>, our
                mission has always been to create an environment where learning
                goes beyond books. From the very beginning, our vision was to
                empower students with practical knowledge and real-world skills.
                I believe education is not just about exams, but about shaping
                careers and building confidence.
              </p>

              <p className="text-gray-800 text-justify text-lg leading-relaxed">
                Over the years, I have seen many students turn their potential
                into success stories, and that has been the most rewarding part
                of this journey. At RankMantra, we are dedicated to providing
                every student with mentorship, hands-on training, and industry
                exposure so they can step into the professional world with
                confidence.
              </p>
            </div>
          </div>
        </div>
        {/* ✅ BLOCK 2 (Left Image, Right Content) */}
        <div className="w-full border-2 shadow-2xl rounded-2xl p-6">
          <div className="flex gap-10 items-stretch">
            {/* ✅ Left TEXT BOX */}
            <div className="flex flex-col justify-center w-[60%]">
              <h3 className="text-3xl text-black font-bold mb-4 leading-tight">
                CEO Message
              </h3>

              <p className="text-gray-800 text-justify text-lg leading-relaxed mb-4">
                <span className="font-semibold">At RankMantra</span>, our
                mission has always been to create an environment where learning
                goes beyond books. From the very beginning, our vision was to
                empower students with practical knowledge and real-world skills.
                I believe education is not just about exams, but about shaping
                careers and building confidence.
              </p>

              <p className="text-gray-800 text-justify text-lg leading-relaxed">
                Over the years, I have seen many students turn their potential
                into success stories, and that has been the most rewarding part
                of this journey. At RankMantra, we are dedicated to providing
                every student with mentorship, hands-on training, and industry
                exposure so they can step into the professional world with
                confidence.
              </p>
            </div>
            {/* ✅ Right IMAGE BOX */}
            <div className="flex flex-col w-[40%]  items-center text-center">
              <div className=" h-[300px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/about/priyankaMam.webp"
                  alt="Person 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-top rounded-lg"
                />
              </div>

              <h3 className="text-2xl text-black font-semibold mt-1">
                Ms. Priyanka Anand
              </h3>
              <p className="text-xl text-gray-600">CEO</p>
            </div>
          </div>
        </div>
        {/* ✅ BLOCK 1 (Left Image, Right Content) */}
        <div className="w-full border-2 shadow-2xl rounded-2xl p-6">
          <div className="flex  gap-10 items-stretch">
            {/* ✅ LEFT IMAGE BOX */}
            <div className="flex flex-col  w-[40%] items-center text-center">
             
                <Image
                  src="/about/parasSir-1024x1017.webp"
                  alt="Person 1"
                  width={400}
                  height={400}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              

              <h3 className="text-2xl text-black font-semibold mt-1">
                Mr. Paras Arora
              </h3>
              <p className="text-xl text-gray-600">Director</p>
            </div>

            {/* ✅ RIGHT TEXT BOX */}
            <div className="flex flex-col w-[60%] justify-center">
              <h3 className="text-3xl text-black font-bold mb-4 leading-tight">
                Director Message
              </h3>

              <p className="text-gray-800 text-justify text-lg leading-relaxed mb-4">
                <span className="font-semibold">At RankMantra</span>, we see
                education as a journey of discovery, not just a process of
                learning. As Director, my vision has always been to guide
                students with the right mix of knowledge, values, and practical
                exposure. I believe that true education should nurture both
                professional skills and personal growth.
              </p>

              <p className="text-gray-800 text-justify text-lg leading-relaxed">
                Our academy is built on the belief that every student has the
                potential to achieve greatness. With structured training,
                mentorship, and real-world projects, we aim to create
                professionals who are confident, capable, and ready to face the
                challenges of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
