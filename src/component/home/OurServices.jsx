import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Real-Time Notifications",
    description:
      "Notify hosts instantly when visitors arrive and keep management informed in real time.",
    image:
      "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Visitor Analytics",
    description:
      "Analyze visitor trends, peak hours, and frequency to improve management efficiency.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Report Generation",
    description:
      "Generate comprehensive reports for all visitors, appointments, and security logs instantly.",
    image:
      "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function OurServices() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-[#237227]">Our Services</h2>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          OTMS offers a complete set of services to streamline visitor management, 
          enhance security, and improve operational efficiency.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-[#237227] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm flex-grow">{service.description}</p>
              <button className="mt-4 self-start px-4 py-2 bg-[#FFAA00] text-[#237227] font-semibold rounded-full shadow hover:bg-[#FFD633] transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServices;