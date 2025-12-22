import React, { useState, useEffect, useRef } from "react";
import ScrollProgressBar from "./Combined/ScrollProgressBar";
import HeroSection from "./Combined/HeroSection";
import CombinedHealthDashboard from "./Combined/CombinedHealthDashboard";
import Accessories from "./Combined/Accessories";
import UnlockPlans from "./Combined/UnlockPlans";
import DailyMetrics from "./Combined/DailyMetrics";

// The main PepHealthApp component
const PepHealthApp = () => {
  // Initialize state to track scroll progress and active section
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);

  const milestones = [
    { id: 0, title: "Welcome", icon: "MessageCircle", color: "from-purple-400 to-blue-400" },
    { id: 1, title: "Daily Metrics", icon: "Activity", color: "from-green-400 to-emerald-400" },
    { id: 2, title: "Fitness", icon: "Zap", color: "from-orange-400 to-red-400" },
    { id: 3, title: "Stress", icon: "Brain", color: "from-pink-400 to-rose-400" },
    { id: 4, title: "Steps", icon: "Footprints", color: "from-blue-400 to-indigo-400" },
    { id: 5, title: "Nutrition", icon: "Apple", color: "from-green-400 to-lime-400" },
    { id: 6, title: "VO2 Max", icon: "Heart", color: "from-cyan-400 to-blue-400" },
    { id: 7, title: "Period", icon: "Calendar", color: "from-pink-400 to-purple-400" },
    { id: 8, title: "Calories", icon: "Scale", color: "from-yellow-400 to-orange-400" },
    { id: 9, title: "Store", icon: "ShoppingCart", color: "from-purple-400 to-pink-400" },
    { id: 10, title: "Premium", icon: "Lock", color: "from-yellow-400 to-amber-400" },
  ];

  // Function to handle scroll and update the progress and active section
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);

    // Update active section based on scroll position
    const sections = sectionsRef.current;
    let currentSection = 0;
    sections.forEach((section, index) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = index;
        }
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100 relative">
      {/* Scroll Progress Bar - Pass both props */}
      {/* <ScrollProgressBar 
        milestones={milestones} 
        scrollProgress={scrollProgress} 
        // activeSection={activeSection}
        // setActiveSection={setActiveSection}
      /> */}
      
      {/* Hero Section */}
      <HeroSection />
      {/* Daily Section  */}
      <DailyMetrics/>
      {/* Combined Health Dashboard */}
      <CombinedHealthDashboard  />
      
      {/* Accessories Section */}
      <Accessories />
      
      {/* Unlock Plans Section */}
      <UnlockPlans />
    </div>
  );
};

export default PepHealthApp;