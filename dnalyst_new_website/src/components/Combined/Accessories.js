import React from "react";
import { Star, Zap, Gift, Crown } from "lucide-react";

const MedicalAccessories = () => (
  <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
          Medical Accessories
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Enhance your healthcare experience with our premium collection of medical accessories.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
        {/* Medical Gloves */}
        <div className="group relative h-full">
          <div className="absolute -top-2 -right-2 z-10">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
              <Star className="w-3 h-3" />
              Popular
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden border border-gray-100 h-full flex flex-col">
            <div className="p-6 text-center flex-1 flex flex-col">
              <div className="w-40 h-40 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-pink-200/30 animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 bg-white rounded-full shadow-inner"></div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Medical Gloves
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  High-quality disposable gloves for patient care
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Thermometer */}
        <div className="group relative h-full">
          <div className="absolute -top-2 -right-2 z-10">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Accurate
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden border border-gray-100 h-full flex flex-col">
            <div className="p-6 text-center flex-1 flex flex-col">
              <div className="w-40 h-40 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 animate-pulse"></div>
                <div className="relative w-24 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute -top-2 -right-2 w-3 h-8 bg-gray-600 rounded-sm shadow-md"></div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Medical Thermometer
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Instant digital thermometer for accurate readings
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* First Aid Kit */}
        <div className="group relative h-full">
          <div className="absolute -top-2 -right-2 z-10">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
              <Gift className="w-3 h-3" />
              Bundle
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden border border-gray-100 h-full flex flex-col">
            <div className="p-6 text-center flex-1 flex flex-col">
              <div className="w-40 h-40 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 animate-pulse"></div>
                <div className="relative grid grid-cols-2 gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg shadow-md"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full shadow-md"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded shadow-md"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg shadow-md"></div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  First Aid Kit
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Complete emergency medical kit for your safety
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Storage Case */}
        <div className="group relative h-full">
          <div className="absolute -top-2 -right-2 z-10">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
              <Crown className="w-3 h-3" />
              Premium
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden border border-gray-100 h-full flex flex-col">
            <div className="p-6 text-center flex-1 flex flex-col">
              <div className="w-40 h-40 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-orange-200/30 animate-pulse"></div>
                <div className="relative w-20 h-14 bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg shadow-lg flex items-center justify-center">
                  <div className="w-12 h-8 bg-gradient-to-r from-amber-200 to-orange-200 rounded shadow-inner flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Medical Storage Case
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Durable storage case for medical supplies and equipment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MedicalAccessories;
