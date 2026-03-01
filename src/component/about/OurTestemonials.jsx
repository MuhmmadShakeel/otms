import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star, Quote } from "lucide-react";

function OurTestemonials() {
  const testimonials = [
    {
      name: "Ahmed Raza",
      role: "HR Manager",
      message:
        "OTMS has completely transformed how we manage visitors. The system is secure, efficient, and extremely easy to use.",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Khan",
      role: "Office Administrator",
      message:
        "The digital check-in process has reduced waiting time significantly. Our front desk operations are now seamless.",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Bilal Hussain",
      role: "Security Supervisor",
      message:
        "Real-time visitor tracking and reports have improved our building security and monitoring standards.",
      image:
        "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      name: "Fatima Noor",
      role: "Operations Manager",
      message:
        "Professional, reliable, and highly customizable. OTMS is exactly what modern organizations need.",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[#237227]">

      {/* Background Glow Effect */}
      <div className="absolute w-96 h-96 bg-green-500/20 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Client Testimonials
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Trusted by leading organizations for secure and smart visitor management solutions.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-xl hover:shadow-green-500/20 transition duration-500 h-full flex flex-col">

                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 text-green-400 opacity-20 w-12 h-12" />

                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full border-2 border-green-400"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-300">{item.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 w-4 h-4 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Message */}
                <p className="text-gray-200 leading-relaxed flex-grow">
                  "{item.message}"
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default OurTestemonials;