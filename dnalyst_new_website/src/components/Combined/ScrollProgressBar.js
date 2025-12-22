import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Lock, Target, MessageCircle } from "lucide-react";
import Progress from "../ui/Progress";
import Button from "../ui/Button";
import Card from "../ui/Card";
import CardContent from "../ui/CardContent";
import Badge from "../ui/Badge";

const ScrollProgressBar = ({ milestones, scrollProgress, activeSection, setActiveSection }) => {
  return (
    <div className="fixed top-4 right-4 lg:right-8 w-full z-50 ml-10">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 lg:p-4 shadow-lg border border-gray-200/50">
        {/* Horizontal Progress Bar */}
        <div className="relative h-1 w-full bg-gray-200 rounded-full mx-auto mb-4">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        
        {/* Milestone Markers */}
        <div className="relative">
          {milestones.map((milestone, index) => {
            const isActive = activeSection === index;
            const isPassed = activeSection > index;
            
            // Dynamically get the icon component
            let IconComponent;
            switch(milestone.icon) {
              case 'MessageCircle':
                IconComponent = MessageCircle;
                break;
              case 'Activity':
                IconComponent = Target; // Using Target as fallback for Activity
                break;
              case 'Zap':
                IconComponent = Target; // Using Target as fallback for Zap
                break;
              case 'Brain':
                IconComponent = Target; // Using Target as fallback for Brain
                break;
              case 'Footprints':
                IconComponent = Target; // Using Target as fallback for Footprints
                break;
              case 'Apple':
                IconComponent = Target; // Using Target as fallback for Apple
                break;
              case 'Heart':
                IconComponent = Target; // Using Target as fallback for Heart
                break;
              case 'Calendar':
                IconComponent = Target; // Using Target as fallback for Calendar
                break;
              case 'Scale':
                IconComponent = Target; // Using Target as fallback for Scale
                break;
              case 'ShoppingCart':
                IconComponent = Target; // Using Target as fallback for ShoppingCart
                break;
              case 'Lock':
                IconComponent = Lock;
                break;
              default:
                IconComponent = Target;
            }
            
            return (
              <div
                key={milestone.id}
                className={`absolute flex items-center transition-all duration-500 ease-out milestone-marker ${
                  isActive ? "scale-110" : "scale-100"
                }`}
                style={{
                  top: "50%",
                  left: `${(index / (milestones.length - 1)) * 100}%`,
                  transform: "translateY(-50%)",
                }}
              >
                <div
                  className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isPassed || isActive ? `bg-gradient-to-r ${milestone.color} shadow-lg` : "bg-gray-200"
                  }`}
                >
                  <IconComponent
                    className={`w-3 h-3 lg:w-4 lg:h-4 transition-colors duration-300 ${
                      isPassed || isActive ? "text-white" : "text-gray-400"
                    }`}
                  />
                </div>
                
                {/* Milestone Label */}
                <div
                  className={`ml-3 lg:ml-4 px-2 lg:px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white shadow-md text-gray-800 scale-105"
                      : isPassed
                      ? "bg-gray-100 text-gray-600"
                      : "bg-transparent text-gray-400"
                  }`}
                >
                  {milestone.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollProgressBar;