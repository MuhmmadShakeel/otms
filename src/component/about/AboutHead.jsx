import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutHead() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Professional Background Image */}
      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop"
        alt="Office Management System"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Green Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d1f]/90 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">

          <h4
            className="text-[#FFAA00] uppercase tracking-[0.4em] font-semibold mb-4 text-sm md:text-base"
            data-aos="fade-right"
          >
            Smart • Secure • Efficient
          </h4>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Transforming Visitor
            <span className="text-[#FFAA00] italic"> Management</span>
            <br />
            Into A Seamless Experience
          </h1>

          <p
            className="mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            OTMS (Online Visitor Management System) is built to enhance
            organizational security, streamline visitor tracking, and
            simplify check-in processes with modern digital solutions.
          </p>

        </div>
      </div>
    </section>
  );
}

export default AboutHead;