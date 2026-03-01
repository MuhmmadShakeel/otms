import React, { useEffect } from "react";
import { Mail, Lock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Login() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 pt-18 pb-18 px-4">

      <div
        data-aos="fade-up"
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-10 border border-slate-200"
      >

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-slate-800">
            Sign In to Your Account
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            Secure access to your dashboard
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">

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
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-700 focus:outline-none text-sm transition"
              />
            </div>
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="accent-slate-700" />
              Remember me
            </label>
            <a href="#" className="text-slate-700 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#FFAA00] text-white text-sm font-medium rounded-lg hover:bg-slate-900 transition"
          >
            Sign In
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-xs text-slate-400 mt-8">
          © 2026 Visitor Management System
        </p>

      </div>
    </div>
  );
}

export default Login;