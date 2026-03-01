import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShieldCheck, Zap, BarChart3 } from "lucide-react";

function ServiceHead() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative bg-white py-24 overflow-hidden">

      {/* Soft Background Shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-100 rounded-full blur-3xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span
            className="inline-block px-4 py-2 text-sm font-medium bg-green-50 text-green-700 rounded-full mb-6"
            data-aos="fade-right"
          >
            Our Core Services
          </span>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            data-aos="fade-up"
          >
            Redefining Workplace{" "}
            <span className="text-green-600">Access Management</span>
          </h1>

          <p
            className="mt-6 text-lg text-gray-600 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our OTMS platform empowers organizations with seamless visitor
            experiences, intelligent monitoring, and advanced reporting —
            all within a secure, user-friendly system.
          </p>

          {/* Feature Points */}
          <div
            className="mt-8 space-y-5"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-start gap-4">
              <ShieldCheck className="text-green-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Enterprise-Level Security
                </h4>
                <p className="text-gray-500 text-sm">
                  Real-time monitoring with secure digital check-ins.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Zap className="text-green-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Instant Visitor Processing
                </h4>
                <p className="text-gray-500 text-sm">
                  Fast and automated front-desk operations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <BarChart3 className="text-green-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Insightful Analytics
                </h4>
                <p className="text-gray-500 text-sm">
                  Detailed reports for better operational decisions.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            className="mt-10 flex flex-wrap gap-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <button className="px-8 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300">
              Get Started
            </button>

            <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="relative"
          data-aos="fade-left"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1556742400-b5f1d6a6f1c1?q=80&w=2070&auto=format&fit=crop"
              alt="Service Overview"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
            <h4 className="text-xl font-bold text-green-600">99% Efficiency</h4>
            <p className="text-sm text-gray-500">
              Improved operational workflow across enterprises.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ServiceHead;