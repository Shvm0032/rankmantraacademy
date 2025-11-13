"use client";
import React from "react";

const CurriculumSection = ({ data }) => {
  // 🎯 All content in one const object
  const curriculumData = [
    {
      title: "Foundations of Digital Marketing",
      description:
        "Explore the basics of digital marketing, how it works, and why it’s important for businesses today.",
      topics: [
        "Introduction to Digital Marketing",
        "Traditional vs Digital Marketing",
        "Career Opportunities",
        "How Businesses Use Digital Marketing",
      ],
      skills: [
        "Strong Foundation in Digital Marketing",
        "Understanding of Online Business Growth",
        "Basic Strategy Planning",
      ],
    },
    {
      title: "Social Media for Growth",
      description:
        "Master social media channels to grow brands and engage customers effectively.",
      topics: [
        "Facebook & Instagram Marketing",
        "LinkedIn for Professionals",
        "YouTube & Twitter Marketing",
        "Social Media Content Creation",
      ],
      skills: [
        "Social Media Campaign Management",
        "Content Creation & Engagement",
        "Brand Building on Social Platforms",
      ],
    },
    {
      title: "SEO Strategy & Optimization",
      description:
        "Learn how to rank websites on Google using proven SEO techniques.",
      topics: [
        "On-Page SEO (Meta Tags, Keyword Placement, Content Optimization)",
        "Off-Page SEO (Backlinks, Guest Posting, Social Bookmarking)",
        "Technical SEO Basics",
      ],
      skills: [
        "Website Optimization",
        "Ranking Skills",
        "Keyword Research",
        "Link Building",
      ],
    },
  ];

  return (
    <section className="bg-white mt-10">
      <div className="max-w-3xl mx-auto ">
        <p className="text-lg text-gray-600">Unlock Cheat Sheet Now?</p>
        <h2 className="text-3xl sm:text-4xl text-black font-bold mb-6">
          Experience a <span className="text-red-600">top-tier curriculum</span>
        </h2>


        <div className="space-y-4">
          {data?.Experience?.map((item, index) => (
            <details
              key={index}
              className="border rounded-lg overflow-hidden"
            >
              <summary className="cursor-pointer bg-gray-100 px-5 py-3 font-semibold">
                {item?.heading}
              </summary>
              <div className="p-5 bg-white">
                <h3 className="text-lg font-bold mb-2">{item?.heading}</h3>
                {
                  data?.heroList ? (
                    <>
                      {
                        data?.heroList?.map((items, i) => (
                          <p key={i} className="text-gray-600 mb-4">{items}</p>
                        ))
                      }
                    </>
                  ) : null
                }
                <p className="text-gray-600 mb-4">{item?.description}</p>

                <div className="mb-4">
                  {item?.Topics && (
                    <>
                      <h4 className="font-semibold mb-2">Topics Covered:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {item.Topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                    </>
                  )}

                </div>

                <div>
                  {item?.skills ? (
                    <>
                      <h4 className="font-semibold mb-2">Skills Acquired:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {item.skills.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    null
                  )}


                </div>
              </div>
            </details>
          ))}
        </div>













        {/* //////////////////////////////////////////// testing ///////////////////////////////////////////////////////// */}

        {/* <div className="space-y-4">
          {data?.Experience?.map((item, index) => (
            <details
              key={index}
              className="border rounded-lg overflow-hidden"
            >
              <summary className="cursor-pointer bg-gray-100 px-5 py-3 font-semibold">
                {item.title}
              </summary>
              <div className="p-5 bg-white">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Topics Covered:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {item?.Topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Skills Acquired:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {item?.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div> */}

        {/* Download Button */}
        <div className="text-center mt-8">
          <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
            ⬇ Download full curriculum
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
