import React from "react";
import { Crown, Zap, Shield } from "lucide-react";

const DailyMetrics = () => (
  <section className="py-6 bg-gradient-to-b from-white via-slate-50/30 to-white">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="space-y-12 lg:space-y-16 text-center">
        <div className="space-y-8">
          <h1 className="text-6xl sm:text-7xl lg:text-6xl font-light leading-tight tracking-tight">
            Premium{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent font-extralight italic">
              Medical Essentials
            </span>
          </h1>
          <div className="flex justify-center mt-16 lg:mt-20">
            <div className="w-80 h-1 bg-gradient-to-r from-transparent via-[#cc5500] to-transparent"></div>{" "}
            {/* Adjusted to w-48 */}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-16 lg:mt-20">
        {/* Card 1 - Medical Gloves */}
        <div className="group relative bg-gradient-to-br from-slate-50/80 via-blue-50/60 to-indigo-100/70 backdrop-blur-sm p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-indigo-200/60 hover:-translate-y-2">
          <div className="absolute top-6 right-6 p-3 bg-white/80 rounded-full shadow-sm group-hover:shadow-md transition-all duration-300">
            <Crown className="w-6 h-6 text-indigo-600" />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light text-gray-800 mb-3 tracking-wide">
                Medical Gloves
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extralight text-gray-900">
                  ₹350
                </span>
                <span className="text-sm text-gray-500 font-light">
                  per box
                </span>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>

            <p className="text-gray-600 leading-relaxed font-light">
              High-quality disposable gloves for medical procedures and patient care.
            </p>

            <div className="pt-2">
              <span className="text-xs text-indigo-600 font-medium tracking-widest uppercase">
                Latex-Free • Durable
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 - Digital Thermometer */}
        <div className="group relative bg-gradient-to-br from-rose-50/80 via-pink-50/60 to-purple-100/70 backdrop-blur-sm p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-purple-200/60 hover:-translate-y-2">
          <div className="absolute top-6 right-6 p-3 bg-white/80 rounded-full shadow-sm group-hover:shadow-md transition-all duration-300">
            <Zap className="w-6 h-6 text-purple-600" />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light text-gray-800 mb-3 tracking-wide">
                Digital Thermometer
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extralight text-gray-900">
                  ₹200
                </span>
                <span className="text-sm text-gray-500 font-light">
                  per unit
                </span>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>

            <p className="text-gray-600 leading-relaxed font-light">
              Instant digital thermometer for quick and accurate body temperature readings.
            </p>

            <div className="pt-2">
              <span className="text-xs text-purple-600 font-medium tracking-widest uppercase">
                Accurate • Instant
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 - First Aid Kit */}
        <div className="group relative bg-gradient-to-br from-emerald-50/80 via-teal-50/60 to-cyan-100/70 backdrop-blur-sm p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-emerald-200/60 hover:-translate-y-2">
          <div className="absolute top-6 right-6 p-3 bg-white/80 rounded-full shadow-sm group-hover:shadow-md transition-all duration-300">
            <Shield className="w-6 h-6 text-emerald-600" />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light text-gray-800 mb-3 tracking-wide">
                First Aid Kit
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extralight text-gray-900">
                  ₹700
                </span>
                <span className="text-sm text-gray-500 font-light">complete</span>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>

            <p className="text-gray-600 leading-relaxed font-light">
              A comprehensive first aid kit for emergencies, equipped with essential medical supplies.
            </p>

            <div className="pt-2">
              <span className="text-xs text-emerald-600 font-medium tracking-widest uppercase">
                Emergency • Complete
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom accent */}
      <div className="flex justify-center lg:mt-20">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>
    </div>
  </section>
);

export default DailyMetrics;
