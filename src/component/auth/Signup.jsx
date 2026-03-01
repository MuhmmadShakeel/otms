import React, { useEffect } from "react";
import { User, Mail, Lock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Signup() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 pt-16 pb-16 px-4">

      <div
        data-aos="fade-up"
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-10 border border-slate-200"
      >

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-slate-800">
            Create an Account
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            Register to access your dashboard
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <div className="relative mt-2">
              <User className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-700 focus:outline-none text-sm transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Email Address
            </label>
            <div className="relative mt-2">
              <Mail className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-700 focus:outline-none text-sm transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <div className="relative mt-2">
              <Lock className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
              <input
                type="password"
                placeholder="Create a password"
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-700 focus:outline-none text-sm transition"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Confirm Password
            </label>
            <div className="relative mt-2">
              <Lock className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-700 focus:outline-none text-sm transition"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 text-xs text-slate-600">
            <input type="checkbox" className="accent-slate-700 mt-1" />
            <span>
              I agree to the Terms & Conditions and Privacy Policy
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-slate-800 text-white text-sm font-medium rounded-lg hover:bg-slate-900 transition"
          >
            Create Account
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-xs text-slate-400 mt-8">
          Already have an account?{" "}
          <a href="#" className="text-slate-700 hover:underline">
            Sign In
          </a>
        </p>

      </div>
    </div>
  );
}

export default Signup;