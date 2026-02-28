import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="bg-gray-50 text-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">

        {/* Image on the left */}
        <div data-aos="fade-right" className="md:w-5/12 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135719.png"
            alt="Visitor Management"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 w-4/5 md:w-full h-72 md:h-96 object-contain"
          />
        </div>

        {/* Text on the right */}
        <div data-aos="fade-left" className="md:w-7/12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#237227]">
            About OTMS
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            OTMS (Office/Organization Visitor Management System) is designed to simplify and secure visitor management. 
            It helps organizations track visitor entries and exits efficiently while ensuring safety and compliance.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Our system offers real-time reports, notifications for staff, and a smooth check-in process to make every visit seamless. 
            With OTMS, managing visitors has never been easier or more secure.
          </p>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;