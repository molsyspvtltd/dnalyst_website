import React, { useState, useEffect } from "react";
import {
  Calendar,
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle,
  Clock,
} from "lucide-react";

const UnlockPlans = () => {
  const [isBooked, setIsBooked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [slidePosition, setSlidePosition] = useState(0);
  const maxSlidePosition = 256; // Set this value based on the width of the slider track

  // Generate random sparkles
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 8; i++) {
        newSparkles.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 2,
          size: Math.random() * 0.5 + 0.5,
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSlide = () => {
    setIsBooked(true);

    // Create magical particle effect
    setTimeout(() => {
      // You could add more effects here
    }, 300);
  };

  const handleMouseDown = (e) => {
    if (isBooked) return;
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isBooked) return;

    const button = e.currentTarget.closest(".slider-container");
    const rect = button.getBoundingClientRect();
    const maxSlide = rect.width - 60; // 60px is the orb width
    const newPosition = Math.min(
      Math.max(0, e.clientX - rect.left - 30),
      maxSlide
    );

    setSlidePosition(newPosition);

    if (newPosition >= maxSlide * 0.8) {
      setIsDragging(false);
      setSlidePosition(maxSlide); // Ensures the slider snaps to the end
      handleSlide();
    }
  };

  const handleMouseUp = () => {
    if (slidePosition >= maxSlidePosition) {
      // If the slider is fully slid, navigate to the new page
      window.location.href = "/product_page"; // Change this to your desired URL
    } else {
      // If not fully slid, snap back to the beginning
      setSlidePosition(0);
    }
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (isBooked) return;
    setIsDragging(true);
    e.preventDefault();
  };
  const handleTouchMove = (e) => {
    if (!isDragging || isBooked) return;

    const touch = e.touches[0];
    const button = e.currentTarget.closest(".slider-container");
    const rect = button.getBoundingClientRect();
    const maxSlide = rect.width - 60; // 60px is the orb width
    const newPosition = Math.min(
      Math.max(0, touch.clientX - rect.left - 30), // Keep the position within bounds
      maxSlide
    );

    setSlidePosition(newPosition);

    // Check if the slider has passed 80% of its total width (full slide)
    if (newPosition >= maxSlide * 0.8) {
      setIsDragging(false);
      setSlidePosition(maxSlide); // Ensure the slider is fully at the end
      handleSlide(); // Trigger any effects related to the slide

      // Redirect once the slider is fully slid
      window.location.href = "/product_page"; // Change this to the desired URL
    }
  };

  const handleTouchEnd = () => {
    if (slidePosition >= maxSlidePosition) {
      // Trigger page redirect for touch
      window.location.href = "/product_page"; // Change this to your desired URL
    } else {
      setSlidePosition(0); // Reset position if not slid enough
    }
    setIsDragging(false);
  };

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white relative overflow-hidden">
      {/* Magical background particles */}
      <div className="absolute inset-0">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute animate-pulse"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              animationDelay: `${sparkle.delay}s`,
              transform: `scale(${sparkle.size})`,
            }}
          >
            <Clock className="w-2 h-2 text-orange-300 opacity-60" />
          </div>
        ))}
      </div>

      {/* Floating booking elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-orange-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-red-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-pink-400 rounded-full opacity-15 animate-ping"></div>

        {/* Floating calendar pages */}
        <div className="absolute top-32 right-32 text-orange-300 opacity-30 animate-float">
          <Calendar className="w-8 h-8" />
        </div>
        <div className="absolute bottom-32 right-16 text-red-300 opacity-40 animate-bounce">
          <Clock className="w-6 h-6" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Magical calendar icon with glow */}
          <div className="relative mb-8">
            <div
              className={`absolute inset-0 rounded-full blur-xl transition-all duration-1000 ${
                isBooked
                  ? "bg-gradient-to-r from-orange-400 to-red-400 opacity-40 animate-pulse"
                  : "bg-gradient-to-r from-orange-400 to-red-400 opacity-40"
              }`}
            ></div>
            <Calendar
              className={`w-16 h-16 mx-auto relative z-10 transition-all duration-1000 ${
                isBooked
                  ? "text-green-400 rotate-12 scale-110"
                  : "text-orange-400"
              }`}
            />

            {/* Calendar details */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                isBooked ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-200 via-red-200 to-pink-200 bg-clip-text text-transparent">
            Book Your Session Now
          </h2>
          <p className="text-orange-200 mb-2 text-lg">
            Secure your spot with our expert trainers
          </p>
          <div className="flex items-center justify-center gap-4 mb-8 text-sm text-orange-300">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Available 24/7</span>
            </div>
            <div className="w-1 h-1 bg-orange-300 rounded-full"></div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Premium Sessions</span>
            </div>
          </div>

          {/* Magical sliding button */}
          <div
            className="relative inline-block group slider-container"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Magic aura effect */}
            <div
              className={`absolute inset-0 rounded-full blur-md transition-all duration-500 ${
                isBooked
                  ? "bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 opacity-60 scale-110"
                  : isHovering
                  ? "bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 opacity-50 scale-105"
                  : "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 opacity-30"
              }`}
            ></div>

            {/* Main button container */}
            <div
              className={`relative bg-gradient-to-r transition-all duration-700 rounded-full p-1 shadow-2xl ${
                isBooked
                  ? "from-green-500 to-emerald-500 shadow-green-500/50"
                  : "from-orange-600 to-red-600 shadow-orange-500/50"
              }`}
            >
              {/* Inner track */}
              <div
                className={`bg-gradient-to-r rounded-full h-16 w-80 relative overflow-hidden transition-all duration-700 ${
                  isBooked
                    ? "from-green-200 to-emerald-200"
                    : "from-gray-800 to-gray-900"
                }`}
              >
                {/* Shimmer effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform transition-transform duration-2000 ${
                    isHovering ? "translate-x-full" : "-translate-x-full"
                  }`}
                ></div>

                {/* Book Now text in track */}
                <div
                  className={`absolute inset-0 flex items-center justify-center text-sm font-semibold transition-all duration-700 ${
                    isBooked ? "text-green-600" : "text-orange-300"
                  }`}
                >
                  {isBooked ? "Session Booked!" : "Swipe to Book →"}
                </div>

                {/* Sliding orb */}
                <div
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                  className={`absolute top-1 left-1 w-14 h-14 rounded-full bg-gradient-to-r transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-400/50 cursor-grab active:cursor-grabbing select-none ${
                    isBooked
                      ? "from-green-400 to-emerald-400 shadow-lg"
                      : "from-orange-400 to-red-400 shadow-lg"
                  } ${isDragging ? "scale-110 shadow-2xl" : ""}`}
                  style={{
                    transform: `translateX(${
                      isBooked ? 256 : slidePosition
                    }px) ${isDragging ? "scale(1.1)" : "scale(1)"}`,
                    transition: isDragging ? "none" : "all 0.3s ease",
                  }}
                >
                  <div className="flex items-center justify-center h-full pointer-events-none">
                    {isBooked ? (
                      <CheckCircle className="w-6 h-6 text-white " />
                    ) : (
                      <Calendar
                        className={`w-6 h-6 text-white transition-transform duration-300 ${
                          isDragging || isHovering ? "scale-110" : ""
                        }`}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes booking-celebration {
          0% {
            transform: rotate(var(--rotation)) translateY(-50px) scale(0);
            opacity: 0;
          }
          50% {
            transform: rotate(var(--rotation)) translateY(-150px) scale(1);
            opacity: 1;
          }
          100% {
            transform: rotate(var(--rotation)) translateY(-250px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes animate-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: animate-float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default UnlockPlans;
