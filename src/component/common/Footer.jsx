import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#237227] text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">OTMS</h3>
            <p className="text-gray-200">
              Online Tracking & Management System. Simplifying appointments, visitors, and everything in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#FFAA00] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FFAA00] transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FFAA00] transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FFAA00] transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-200">123 Main Street, Bahawalpur, Pakistan</p>
            <p className="text-gray-200">Phone: +92 300 1234567</p>
            <p className="text-gray-200">Email: info@otms.com</p>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-[#FFAA00] transition-colors duration-200">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#FFAA00] transition-colors duration-200">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-[#FFAA00] transition-colors duration-200">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#FFAA00] transition-colors duration-200">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-4 text-center text-gray-200 text-sm">
          &copy; {new Date().getFullYear()} OTMS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;