import React, { useState } from "react";
import { Phone } from "lucide-react";

export default function CallButton() {
  const phoneNumber = "+919876543210";
  const [showNumber, setShowNumber] = useState(false);

  const handleClick = (e) => {
    if (window.innerWidth < 640 && !showNumber) {
      e.preventDefault(); // Stop the call from happening
      setShowNumber(true); // Just show the number
    }
    // On second click or large screen, let it proceed with the call
  };

  return (
    <a
      href={`tel:${phoneNumber}`}
      onClick={handleClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-burnt text-white p-3 sm:px-5 sm:py-4 rounded-full sm:rounded-3xl shadow-xl hover:bg-burnt/90 transition-all flex flex-col sm:flex-row items-center gap-0 sm:gap-2 z-50"
    >
      {/* Small screens: toggle view */}
      <span className="text-xs font-medium text-center sm:hidden">
        {showNumber ? phoneNumber : "Call Us"}
      </span>

      {/* Large screens: full content */}
      <span className="hidden sm:inline text-sm font-medium text-center">
        Free Counseling
      </span>

      <div className="mt-1 sm:mt-0 flex items-center gap-1 sm:gap-2">
        <Phone size={16} className="sm:w-5 sm:h-5" />
        <span className="hidden sm:inline text-base font-semibold">
          {phoneNumber}
        </span>
      </div>
    </a>
  );
}
