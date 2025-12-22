import React, { useState, useEffect, useRef } from "react";
import {
  Activity,
  ArrowRight,
  Apple,
  Target,
  Calendar,
  TrendingUp,
  Zap,
  Heart,
  ChevronRight,
  RotateCcw,
  Play,
  Pause,
  Download,
  Droplets,
  Truck,
  Database,
  FileText,
  Stethoscope,
} from "lucide-react";

// Custom CSS for animations and styling
const customStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
    50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6); }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes rotate-continuous {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .float-animation {
    animation: float 3s ease-in-out infinite;
  }
  
  .pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
  
  .shimmer {
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
  }
  
  .rotate-continuous {
    animation: rotate-continuous 20s linear infinite;
  }
`;

// Inject custom styles
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.textContent = customStyles;
  document.head.appendChild(styleElement);
}

// Enhanced Button Component
const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClasses =
    "px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center text-sm sm:text-base";
  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1",
    outline:
      "border-2 border-gray-200 hover:border-indigo-500 bg-white hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 shadow-md hover:shadow-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Enhanced Card Component
const Card = ({ children, className = "", ...props }) => (
  <div
    className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
);

// Enhanced Progress Component
const Progress = ({ value, className = "" }) => (
  <div className={`bg-gray-200 rounded-full h-2 sm:h-3 ${className}`}>
    <div
      className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 sm:h-3 rounded-full transition-all duration-500 relative overflow-hidden"
      style={{ width: `${value}%` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
    </div>
  </div>
);

// Simplified Circular Loop Tracker - Only the beautiful loop
const CircularLoopTracker = ({
  scrollPercentage,
  sections,
  isPlaying,
  onTogglePlay,
}) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    const sectionIndex = Math.floor((scrollPercentage / 100) * sections.length);
    setCurrentSection(Math.min(sectionIndex, sections.length - 1));

    const loops = Math.floor(scrollPercentage / 100);
    setLoopCount(loops);
  }, [scrollPercentage, sections.length]);

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset =
    circumference - ((scrollPercentage % 100) / 100) * circumference;

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-6 pulse-glow">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <button
              onClick={onTogglePlay}
              className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-indigo-100 hover:to-purple-100 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-gray-600" />
              ) : (
                <Play className="w-5 h-5 text-gray-600 ml-0.5" />
              )}
            </button>
          </div>

          <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Health Journey Loop
          </h2>

          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {Math.round(scrollPercentage % 100)}%
            </div>
          </div>
        </div>

        {/* Beautiful Circular Progress Ring */}
        <div className="relative flex items-center justify-center mb-6">
          <svg className="w-64 h-64 transform -rotate-90" viewBox="0 0 220 220">
            {/* Background circle */}
            <circle
              cx="110"
              cy="110"
              r={radius}
              stroke="rgba(229, 231, 235, 0.3)"
              strokeWidth="8"
              fill="transparent"
            />

            {/* Completed loops indicator */}
            {loopCount > 0 && (
              <circle
                cx="110"
                cy="110"
                r={radius - 15}
                stroke="rgba(34, 197, 94, 0.3)"
                strokeWidth="6"
                fill="transparent"
              />
            )}

            {/* Main progress circle */}
            <circle
              cx="110"
              cy="110"
              r={radius}
              stroke="url(#progressGradient)"
              strokeWidth="10"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
              style={{ filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.4))" }}
            />

            {/* Gradient definitions */}
            <defs>
              <linearGradient
                id="progressGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="30%" stopColor="#8b5cf6" />
                <stop offset="60%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center content with current section info */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div
                className={`w-20 h-20 bg-gradient-to-br ${
                  sections[currentSection]?.gradient ||
                  "from-gray-300 to-gray-400"
                } rounded-3xl flex items-center justify-center mb-3 mx-auto shadow-xl ${
                  isPlaying ? "rotate-continuous" : "float-animation"
                }`}
              >
                {React.createElement(
                  [Download, Droplets, Truck, Database, FileText, Stethoscope][
                    currentSection
                  ] || Download,
                  { className: "w-10 h-10 text-white" }
                )}
              </div>
              <div className="text-lg font-bold text-gray-800 mb-1">
                {sections[currentSection]?.name || "Loading..."}
              </div>
              <div className="text-sm text-gray-500">
                Section {currentSection + 1} of {sections.length}
              </div>
            </div>
          </div>
        </div>

        {/* Status and controls */}
        <div className="text-center space-y-4">
          {/* Dynamic status message */}
          <div
            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              loopCount >= 3
                ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800"
                : loopCount >= 1
                ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800"
                : scrollPercentage % 100 >= 90
                ? "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800"
                : scrollPercentage % 100 >= 50
                ? "bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800"
                : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600"
            }`}
          >
            <span>
              {loopCount >= 3
                ? "Process Expert! 🏆"
                : loopCount >= 2
                ? "Journey Champion! 🌟"
                : loopCount >= 1
                ? "Great Progress! Ready for Next! 🔄"
                : scrollPercentage % 100 >= 90
                ? "Almost Complete! 🎉"
                : scrollPercentage % 100 >= 50
                ? "Halfway There! 💪"
                : "Starting Journey 🚀"}
            </span>
          </div>

          {/* Overall progress indicator */}
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
              style={{ width: `${scrollPercentage % 100}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-pulse"></div>
            </div>
          </div>

          {loopCount > 0 && (
            <div className="text-xs text-gray-500 mt-2">
              Completed {loopCount} full cycle{loopCount > 1 ? "s" : ""} of your
              health journey!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// App Download Section
const AppDownload = () => (
  <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
        <Card className="relative overflow-hidden order-2 lg:order-1">
          <CardContent className="p-4 sm:p-6">
            <div className="text-center mb-4 sm:mb-6">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-3">
                4.9★
              </div>
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 text-sm font-semibold rounded-full px-4 py-2 mb-2">
                App Store Rating
              </div>
              <p className="text-sm text-gray-500">Download takes 30 seconds</p>
            </div>
            <div className="h-24 sm:h-32 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl flex items-end justify-between p-4 mb-4">
              {[95, 88, 92, 97, 85, 90, 94].map((height, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-t from-emerald-400 to-teal-500 rounded-t-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  style={{ height: `${height}%`, width: "12%" }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              {[
                "Download",
                "Install",
                "Register",
                "Setup",
                "Subscribe",
                "Sync",
                "Start",
              ].map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
              <Download className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              App Download & Subscription
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Start your health journey by downloading our comprehensive health
            monitoring app. Choose from flexible subscription plans tailored to
            your wellness goals and budget with instant access.
          </p>
          <Button
            variant="outline"
            className="border-emerald-200 hover:border-emerald-500 hover:bg-emerald-50 w-full sm:w-auto"
          >
            Download Now <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

// Blood Sample Collection Section
const BloodSampleCollection = () => (
  <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-orange-50 to-red-50">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
        <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
              <Droplets className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Saliva Sample Collection
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Easy, non-invasive saliva collection kit delivered to your home.
            Collect your sample in the comfort of your own space with our
            sterile, FDA-approved collection tubes and detailed instructions.
          </p>
          <Button
            variant="outline"
            className="border-orange-200 hover:border-orange-500 hover:bg-orange-50 w-full sm:w-auto"
          >
            Collection Guide <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <Card className="relative overflow-hidden order-1 lg:order-2">
          <CardContent className="p-4 sm:p-6">
            <div className="text-center mb-4 sm:mb-6">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
                3ml
              </div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-sm font-semibold rounded-full px-4 py-2 mb-2">
                Sample Volume Required
              </div>
              <p className="text-sm text-gray-500">
                Collection takes 2-3 minutes
              </p>
            </div>
            <div className="h-24 sm:h-32 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl flex items-end justify-between p-4 mb-4">
              {[85, 92, 78, 95, 88, 90, 96].map((height, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-t from-orange-400 to-red-500 rounded-t-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  style={{ height: `${height}%`, width: "12%" }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              {[
                "Collect",
                "Seal",
                "Label",
                "Store",
                "Cool",
                "Pack",
                "Ship",
              ].map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

// Transportation Section
const Transportation = () => (
  <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
        <Card className="relative overflow-hidden">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Sample Transit
              </h3>
              <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
            </div>
            <div className="mb-6 sm:mb-8">
              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  18hrs
                </span>
                <span className="text-base sm:text-lg text-gray-500">
                  avg delivery
                </span>
              </div>
              <Progress value={75} className="h-3 sm:h-4 mb-2" />
              <div className="flex justify-between text-sm text-gray-600">
                <span>In Transit</span>
                <span>6hrs remaining</span>
              </div>
            </div>
            <div className="h-24 sm:h-32 flex items-end justify-between mb-4">
              {[12, 18, 24, 16, 20, 14, 18].map((hours, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div
                    className="bg-gradient-to-t from-blue-400 to-indigo-500 rounded-t-lg w-6 sm:w-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    style={{ height: `${(hours / 24) * 100}%` }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-2 font-medium">
                    {["M", "T", "W", "T", "F", "S", "S"][index]}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Sample Transportation
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Secure, temperature-controlled logistics ensure your sample reaches
            our certified laboratory within 24 hours. Real-time tracking and
            chain of custody documentation guarantee integrity.
          </p>
          <Button
            variant="outline"
            className="border-blue-200 hover:border-blue-500 hover:bg-blue-50 w-full sm:w-auto"
          >
            Track Sample <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

// Data Generation Section
const DataGeneration = () => (
  <section className="py-8 sm:py-12 lg:py-16 bg-white">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
        <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Data Generation
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Advanced laboratory analysis using cutting-edge genomics,
            proteomics, and metabolomics technologies. Our CLIA-certified lab
            processes over 150+ biomarkers for comprehensive health insights.
          </p>
          <Button
            variant="outline"
            className="border-pink-200 hover:border-pink-500 hover:bg-pink-50 w-full sm:w-auto"
          >
            Lab Process <Database className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <Card className="relative overflow-hidden order-1 lg:order-2">
          <CardContent className="p-4 sm:p-6">
            <div className="flex gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center shadow-lg">
                <Database className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  Multi-Omics Analysis
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Comprehensive molecular profiling including genetic variants,
                  protein expression, and metabolic pathways.
                </p>
                <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  150+{" "}
                  <span className="text-sm text-gray-500 font-normal">
                    biomarkers
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                {
                  label: "Genomics",
                  value: "45",
                  color: "from-orange-400 to-red-400",
                },
                {
                  label: "Proteomics",
                  value: "38",
                  color: "from-yellow-400 to-orange-400",
                },
                {
                  label: "Metabolomics",
                  value: "42",
                  color: "from-green-400 to-emerald-400",
                },
                {
                  label: "Lipidomics",
                  value: "25",
                  color: "from-purple-400 to-pink-400",
                },
              ].map((analysis, index) => (
                <div
                  key={index}
                  className="text-center p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div
                    className={`text-base sm:text-lg font-bold bg-gradient-to-r ${analysis.color} bg-clip-text text-transparent`}
                  >
                    {analysis.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {analysis.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

// Data Assessment and Report Section
const DataAssessment = () => (
  <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-cyan-50 to-blue-100">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
        <Card className="relative overflow-hidden">
          <CardContent className="p-4 sm:p-6">
            <div className="text-center mb-6 sm:mb-8">
              <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-3">
                95%
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                Analysis Complete
              </h3>
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-semibold rounded-full px-4 py-2">
                Report Ready for Review
              </div>
            </div>
            <div className="h-24 sm:h-32 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl flex items-end justify-between p-4 mb-6">
              {[88, 92, 85, 98, 95].map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-t from-blue-400 to-cyan-500 rounded-t-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ height: `${value}%`, width: "16%" }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-500 font-medium">
              {[
                "Data Prep",
                "Analysis",
                "AI Review",
                "Validation",
                "Report",
              ].map((stage) => (
                <span key={stage} className="text-xs sm:text-sm">
                  {stage}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Data Assessment & Report
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            AI-powered analysis engine processes your biomarker data through
            advanced algorithms. Comprehensive health report with personalized
            recommendations, risk assessments, and actionable insights delivered
            within 72 hours.
          </p>
          <Button
            variant="outline"
            className="border-blue-200 hover:border-blue-500 hover:bg-blue-50 w-full sm:w-auto"
          >
            View Report <TrendingUp className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

// Physical Consultation Section
const PhysicalConsultation = () => (
  <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-emerald-50 to-green-100">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Physical Consultation
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            One-on-one consultation with certified healthcare professionals to
            discuss your personalized health report. Receive expert medical
            interpretation, lifestyle recommendations, and customized wellness
            plans based on your unique biomarker profile.
          </p>
          <Button
            variant="outline"
            className="border-green-200 hover:border-green-500 hover:bg-green-50 w-full sm:w-auto"
          >
            Book Appointment <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <Card className="relative overflow-hidden">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Next Appointment
              </h3>
              <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
            </div>
            <div className="text-center mb-6 sm:mb-8">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                45min
              </div>
              <div className="text-base sm:text-lg text-gray-600 font-semibold">
                Consultation Duration
              </div>
              <div className="text-sm text-green-600 font-medium">
                Comprehensive health review
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8">
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Dr. Smith
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  Lead Physician
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-red-50 to-pink-50">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  Thu 2PM
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  Available Slot
                </div>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  label: "Report Review",
                  value: "15 min",
                  color: "bg-blue-500",
                },
                {
                  label: "Health Assessment",
                  value: "15 min",
                  color: "bg-green-500",
                },
                {
                  label: "Recommendations",
                  value: "10 min",
                  color: "bg-yellow-500",
                },
                {
                  label: "Q&A Session",
                  value: "5 min",
                  color: "bg-purple-500",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-sm font-medium text-gray-700">
                      {item.label}
                    </span>
                  </div>
                  <span className="font-bold text-gray-800 text-sm sm:text-base">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

// Main Health Dashboard Component
const HealthDashboard = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const autoScrollInterval = useRef(null);

  const sections = [
    { name: "App Download", gradient: "from-emerald-400 to-teal-500" },
    { name: "Sample Collection", gradient: "from-orange-400 to-red-500" },
    { name: "Transportation", gradient: "from-blue-400 to-indigo-500" },
    { name: "Data Generation", gradient: "from-pink-400 to-purple-500" },
    { name: "Assessment", gradient: "from-blue-400 to-cyan-500" },
    { name: "Consultation", gradient: "from-green-400 to-emerald-500" },
  ];

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const totalScrollable = scrollHeight - clientHeight;

      if (totalScrollable > 0) {
        const rawPercentage = (scrollTop / totalScrollable) * 100;
        setScrollPercentage(Math.max(0, rawPercentage));
      }
    }
  };

  const toggleAutoPlay = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (isPlaying) {
      autoScrollInterval.current = setInterval(() => {
        if (containerRef.current) {
          const { scrollTop, scrollHeight, clientHeight } =
            containerRef.current;
          const maxScroll = scrollHeight - clientHeight;

          if (scrollTop >= maxScroll) {
            containerRef.current.scrollTop = 0;
            setTimeout(() => {
              if (containerRef.current) {
                containerRef.current.scrollTop = 1;
              }
            }, 100);
          } else {
            containerRef.current.scrollTop += 1.5;
          }
        }
      }, 30);
    } else {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    }

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [isPlaying]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <div className="sticky top-0 z-50 p-4 bg-white/95 backdrop-blur-lg shadow-lg">
          <CircularLoopTracker
            scrollPercentage={scrollPercentage}
            sections={sections}
            isPlaying={isPlaying}
            onTogglePlay={toggleAutoPlay}
          />
        </div>
        <div className="pb-4">
          <AppDownload />
          <BloodSampleCollection />
          <Transportation />
          <DataGeneration />
          <DataAssessment />
          <PhysicalConsultation />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen">
        {/* Left Column - Circular Loop Tracker (Fixed) */}
        <div className="w-1/4 xl:w-1/3 p-6 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="sticky top-6">
            <CircularLoopTracker
              scrollPercentage={scrollPercentage}
              sections={sections}
              isPlaying={isPlaying}
              onTogglePlay={toggleAutoPlay}
            />
          </div>
        </div>

        {/* Right Column - Scrolling Content */}
        <div
          ref={containerRef}
          className="w-3/4 xl:w-2/3 h-screen overflow-y-auto scroll-smooth scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div ref={contentRef} className="min-h-full">
            <AppDownload />
            <BloodSampleCollection />
            <Transportation />
            <DataGeneration />
            <DataAssessment />
            <PhysicalConsultation />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HealthDashboard;
