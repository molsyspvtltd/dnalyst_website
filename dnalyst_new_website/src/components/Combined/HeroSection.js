import React from "react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { Sparkles } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 text-gray-800 min-h-screen flex items-center">
    {/* Animated background elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
    </div>

    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>

    <div className="relative container mx-auto px-6 py-20 max-w-6xl">
      <div className="grid gap-12 lg:gap-16 items-center">
        {/* Content Section */}
        <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center font-bold leading-tight">
              Introducing{" "}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                new features
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-700 text-center leading-relaxed  mx-auto lg:mx-0">
              Instant, personalised, AI-powered health insights that bring your
              Smart Ring data to life with revolutionary precision.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-700 rounded-3xl opacity-20 group-hover:opacity-30 blur-lg transition-all duration-500"></div>

          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-2 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2">
            {/* Embed YouTube video with specific height */}
            <iframe
              className="w-full h-[500px] rounded-3xl shadow-lg"
              src="https://www.youtube.com/embed/SqcY0GlETPk"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg animate-bounce">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
