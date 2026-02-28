import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShieldCheck, Users, BarChart3 } from "lucide-react";

function OurMssion() {
  // grab operating system from browser
  const os = typeof navigator !== "undefined" ? navigator.platform : "Unknown";

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section data-aos="fade-up" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#237227]">
            Our Mission
          </h2>
          <p className="mt-2 text-gray-500">OS: {os}</p>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            To revolutionize visitor management through secure, smart, and
            seamless digital solutions that enhance safety and operational efficiency.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Security Card */}
          <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center group">
            <div className="flex justify-center mb-6">
              <div className="bg-[#237227]/10 p-4 rounded-full group-hover:bg-[#237227] transition duration-300">
                <ShieldCheck className="text-[#237227] group-hover:text-white w-8 h-8 transition duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Enhanced Security
            </h3>
            <p className="text-gray-600">
              Protect organizations by maintaining accurate visitor records,
              secure authentication, and controlled access management.
            </p>
          </div>

          {/* Efficiency Card */}
          <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center group">
            <div className="flex justify-center mb-6">
              <div className="bg-[#237227]/10 p-4 rounded-full group-hover:bg-[#237227] transition duration-300">
                <BarChart3 className="text-[#237227] group-hover:text-white w-8 h-8 transition duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Operational Efficiency
            </h3>
            <p className="text-gray-600">
              Streamline check-in and check-out processes while generating
              real-time reports for better decision-making.
            </p>
          </div>

          {/* Experience Card */}
          <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center group">
            <div className="flex justify-center mb-6">
              <div className="bg-[#237227]/10 p-4 rounded-full group-hover:bg-[#237227] transition duration-300">
                <Users className="text-[#237227] group-hover:text-white w-8 h-8 transition duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Seamless Experience
            </h3>
            <p className="text-gray-600">
              Provide visitors and staff with a smooth, digital-first
              experience that reduces wait times and improves satisfaction.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OurMssion;