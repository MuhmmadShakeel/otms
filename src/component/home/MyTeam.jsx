import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MyTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Initialize AOS Animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Team members data for OTMS
  const teamData = [
    {
      id: 1,
      image:
        "https://cdn-icons-png.flaticon.com/512/3135/3135719.png",
      name: "Alice Johnson",
      role: "Project Manager",
      description:
        "Oversees all operations and ensures smooth execution of the visitor management system.",
      bgColor: "bg-[#237227]",
    },
    {
      id: 2,
      image:
        "https://cdn-icons-png.flaticon.com/512/3135/3135723.png",
      name: "Robert Smith",
      role: "Frontend Developer",
      description:
        "Designs intuitive interfaces and responsive layouts for a seamless user experience.",
      bgColor: "bg-[#FFAA00]",
    },
    {
      id: 3,
      image:
        "https://cdn-icons-png.flaticon.com/512/3135/3135727.png",
      name: "Linda Davis",
      role: "Backend Developer",
      description:
        "Implements server-side logic and ensures data security and reliability.",
      bgColor: "bg-[#237227]",
    },
    {
      id: 4,
      image:
        "https://cdn-icons-png.flaticon.com/512/3135/3135731.png",
      name: "Michael Lee",
      role: "QA Specialist",
      description:
        "Tests the system thoroughly to ensure error-free and high-quality performance.",
      bgColor: "bg-[#FFAA00]",
    },
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [teamData.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full bg-gray-50 min-h-screen py-12">
      {/* Heading */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
        data-aos="fade-up"
      >
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#237227] leading-tight mb-6">
          Meet Our Team
        </h1>
        <p className="text-xl lg:text-2xl mt-4 text-gray-700 font-medium max-w-4xl mx-auto leading-relaxed">
          The passionate minds behind OTMS, ensuring smooth, secure, and efficient visitor management.
        </p>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="zoom-in-up">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left - Images */}
          <div className="lg:w-1/2 relative overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {teamData.map((member) => (
                <div key={member.id} className="w-full flex-shrink-0">
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 lg:h-96 object-contain rounded-2xl"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {teamData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[#237227] scale-125"
                      : "bg-white/80 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:w-1/2 relative overflow-hidden rounded-2xl h-full">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {teamData.map((member) => (
                <div
                  key={member.id}
                  className={`w-full flex-shrink-0 p-8 lg:p-12 rounded-2xl ${member.bgColor} h-full flex flex-col justify-center`}
                >
                  <h2
                    className={`text-3xl lg:text-4xl font-bold mb-4 ${
                      member.bgColor === "bg-[#237227]" ? "text-white" : "text-[#237227]"
                    }`}
                  >
                    {member.name}
                  </h2>
                  <h3
                    className={`text-xl lg:text-2xl font-semibold mb-4 ${
                      member.bgColor === "bg-[#237227]" ? "text-white/90" : "text-gray-700"
                    }`}
                  >
                    {member.role}
                  </h3>
                  <p
                    className={`text-lg lg:text-xl leading-relaxed ${
                      member.bgColor === "bg-[#237227]" ? "text-white/90" : "text-gray-800"
                    }`}
                  >
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center mt-8 lg:hidden" data-aos="fade-up">
          <div className="flex space-x-4">
            {teamData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#237227] text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyTeam;