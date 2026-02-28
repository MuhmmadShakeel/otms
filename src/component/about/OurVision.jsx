import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OurVision() {
  const os = typeof navigator !== "undefined" ? navigator.platform : "Unknown";

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section data-aos="fade-up" className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#237227]">
            Our Vision
          </h2>
          <p className="mt-2 text-gray-500">OS: {os}</p>
          <div className="w-24 h-1 bg-[#FFAA00] mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
            To transform traditional visitor management into a secure, digital,
            and seamless experience that enhances organizational efficiency
            and safety.
          </p>
        </div>

        {/* Vision Content */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8 text-center">
            <div className="w-16 h-16 bg-[#237227] text-white flex items-center justify-center rounded-full mx-auto mb-6 text-2xl font-bold">
              01
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Digital Transformation
            </h3>
            <p className="text-gray-600">
              Replace outdated manual entry systems with smart digital
              solutions that improve accuracy and efficiency.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8 text-center">
            <div className="w-16 h-16 bg-[#237227] text-white flex items-center justify-center rounded-full mx-auto mb-6 text-2xl font-bold">
              02
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Enhanced Security
            </h3>
            <p className="text-gray-600">
              Ensure real-time monitoring and secure visitor tracking to
              protect people, data, and organizational assets.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8 text-center">
            <div className="w-16 h-16 bg-[#237227] text-white flex items-center justify-center rounded-full mx-auto mb-6 text-2xl font-bold">
              03
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Seamless Experience
            </h3>
            <p className="text-gray-600">
              Provide a smooth and user-friendly system for both visitors and
              administrators to ensure a hassle-free process.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OurVision;