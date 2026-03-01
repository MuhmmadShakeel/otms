import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function ContactUs() {
  return (
    <section className="relative py-24  overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute w-96 h-96 bg-green-500/20 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            Have questions about our Visitor Management System?  
            Our team is ready to assist you with smart, secure solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE - Contact Info */}
          <div className="space-y-8">

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 flex items-start gap-4 hover:scale-105 transition duration-300">
              <Mail className="text-green-400 w-6 h-6 mt-1" />
              <div>
                <h4 className="text-white font-semibold text-lg">Email Us</h4>
                <p className="text-gray-300 text-sm">support@otms.com</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 flex items-start gap-4 hover:scale-105 transition duration-300">
              <Phone className="text-green-400 w-6 h-6 mt-1" />
              <div>
                <h4 className="text-white font-semibold text-lg">Call Us</h4>
                <p className="text-gray-300 text-sm">+92 300 1234567</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 flex items-start gap-4 hover:scale-105 transition duration-300">
              <MapPin className="text-green-400 w-6 h-6 mt-1" />
              <div>
                <h4 className="text-white font-semibold text-lg">Visit Office</h4>
                <p className="text-gray-300 text-sm">
                  123 Business Avenue, Islamabad, Pakistan
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10">

            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-6">

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-yellow-400 text-black font-semibold rounded-xl hover:scale-105 transition duration-300 shadow-lg"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactUs;