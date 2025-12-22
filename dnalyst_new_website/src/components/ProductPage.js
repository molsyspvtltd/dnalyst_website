import React, { useState } from "react";

function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("matte-black");
  const [hasSizingKit, setHasSizingKit] = useState("no");
  const [buyingFor, setBuyingFor] = useState("myself");
  const [selectedGoal, setSelectedGoal] = useState("weight-loss");
  const [selectedDuration, setSelectedDuration] = useState("6-months");
  const [showHealthPlan, setShowHealthPlan] = useState(false);

  // New form fields
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const colors = [
    { id: "matte-black", name: "Matte black", image: "/placeholder.svg?height=60&width=60" },
    { id: "matte-silver", name: "Matte silver", image: "/placeholder.svg?height=60&width=60" },
    { id: "rose-gold", name: "Rose gold", image: "/placeholder.svg?height=60&width=60" },
  ];

  const services = [
    { id: "fitness", name: "Fitness", icon: "💪", description: "Personal training" },
    { id: "nutrition", name: "Nutrition", icon: "🥗", description: "Diet planning" },
    { id: "wellness", name: "Wellness", icon: "🧘", description: "Mental health" },
    { id: "sleep", name: "Sleep", icon: "😴", description: "Sleep tracking" },
    { id: "recovery", name: "Recovery", icon: "⚡", description: "Recovery plans" },
    { id: "coaching", name: "Coaching", icon: "🎯", description: "Life coaching" },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-25 to-green-50 min-h-screen">
      {/* Header with navigation arrows */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl mx-2 mb-4 mt-2">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-3 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-all transform hover:scale-105 active:scale-95"
          aria-label="Go back"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-white font-medium text-sm">Back</span>
        </button>
        <h1 className="text-white font-bold text-lg">Health & Wellness</h1>        
        <div className="w-16 h-10"></div> {/* Spacer for center alignment */}
      </div>

      {/* Banner - Product Image */}
      <div className="flex justify-center py-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl mx-2">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-green-300 rounded-full blur-xl opacity-30"></div>
          <img
            src="/wellness-placeholder.svg?height=200&width=200"
            alt="Health & Wellness"
            width={200}
            height={200}
            className="object-contain relative z-10"
          />
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
        {/* Product Info */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent mb-1">Wellness</h1>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent mb-2">Health Plan</h2>
            <p className="text-sm text-gray-500">⭐ 4.8/5 • 2,50,000</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">₹29028</span>
              <span className="bg-gradient-to-r from-green-400 to-green-500 text-white px-2 py-1 rounded text-xs font-medium">15% off</span>
            </div>
            <p className="text-sm text-gray-500">
              MRP: <span className="line-through">₹34440</span> (Incl. of all taxes)
            </p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white bg-opacity-80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-green-200 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-green-800">Personal Information</h3>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-green-700 mb-2">Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white"
              placeholder="Enter your full name"
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-green-700 mb-3">Gender *</label>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <label className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-colors flex-1 ${
                gender === "male" ? "border-green-400 bg-green-100" : "border-green-200 bg-white"
              }`}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                  gender === "male" ? "border-green-400" : "border-green-300"
                }`}>
                  {gender === "male" && <div className="w-2 h-2 bg-green-400 rounded-full"></div>}
                </div>
                <span className="font-medium text-green-800">Male</span>
              </label>

              <label className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-colors flex-1 ${
                gender === "female" ? "border-green-400 bg-green-100" : "border-green-200 bg-white"
              }`}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                  gender === "female" ? "border-green-400" : "border-green-300"
                }`}>
                  {gender === "female" && <div className="w-2 h-2 bg-green-400 rounded-full"></div>}
                </div>
                <span className="font-medium text-green-800">Female</span>
              </label>
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-green-700 mb-2">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-green-700 mb-2">Phone Number *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white"
              placeholder="+91 Enter your phone number"
            />
          </div>
        </div>

        {/* Services */}
        <div className="bg-white bg-opacity-80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-green-200 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Select a Wellness Service</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`p-4 border-2 rounded-xl text-center transition-all transform hover:scale-105 ${
                  selectedService === service.id 
                    ? "border-green-400 bg-gradient-to-br from-green-50 to-green-100 shadow-lg" 
                    : "border-gray-200 hover:border-green-300 bg-white"
                }`}
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <p className="font-semibold text-sm text-gray-800">{service.name}</p>
                <p className="text-xs text-gray-600 mt-1">{service.description}</p>
                {selectedService === service.id && (
                  <div className="mt-2">
                    <div className="w-4 h-4 bg-green-400 rounded-full mx-auto"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Health Plan */}
        <div className="bg-white bg-opacity-80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-green-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">
                Add a health plan? <span className="text-gray-500 font-normal">(Optional)</span>
              </h3>
              <p className="text-sm text-gray-600">Achieve your health goal faster</p>
            </div>
            <button onClick={() => setShowHealthPlan(!showHealthPlan)} className="p-2">
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform ${showHealthPlan ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {showHealthPlan && (
            <div className="space-y-6">
              <div className="text-right">
                <button className="text-green-500 text-sm font-medium">View all benefits</button>
              </div>

              {/* Goal Selection */}
              <div>
                <h4 className="font-semibold mb-3">Select goal for your plan ℹ️</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setSelectedGoal("weight-loss")}
                    className={`p-4 border-2 rounded-lg text-center transition-colors ${
                      selectedGoal === "weight-loss" ? "border-green-400 bg-green-50" : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                      <img
                        src="/weight-loss.svg?height=40&width=40"
                        alt="Weight loss"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <p className="font-medium">Weight loss</p>
                  </button>

                  <button
                    onClick={() => setSelectedGoal("stay-fit")}
                    className={`p-4 border-2 rounded-lg text-center transition-colors ${
                      selectedGoal === "stay-fit" ? "border-green-400 bg-green-50" : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                      <img
                        src="/stay-fit.svg?height=40&width=40"
                        alt="Stay fit"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <p className="font-medium">Stay fit</p>
                  </button>
                </div>
              </div>

              {/* Duration Selection */}
              <div>
                <h4 className="font-semibold mb-3">Select duration for your plan</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setSelectedDuration("6-months")}
                    className={`p-4 border-2 rounded-lg text-center transition-colors ${
                      selectedDuration === "6-months" ? "border-green-400 bg-green-50" : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="mb-2">
                      <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded text-xs font-medium">6 months</span>
                    </div>
                    <p className="text-xl font-bold">₹15918</p>
                    <p className="text-sm text-gray-500 line-through">₹21600</p>
                  </button>

                  <button
                    onClick={() => setSelectedDuration("12-months")}
                    className={`p-4 border-2 rounded-lg text-center transition-colors ${
                      selectedDuration === "12-months" ? "border-green-400 bg-green-50" : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="mb-2">
                      <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs font-medium">12 months</span>
                    </div>
                    <p className="text-xl font-bold">₹30210</p>
                    <p className="text-sm text-gray-500 line-through">₹43200</p>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Coupon Code */}
        <div className="bg-white bg-opacity-80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-green-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 space-y-2 sm:space-y-0">
            <h3 className="text-lg font-semibold text-green-800">Got a coupon code?</h3>
            <button className="text-green-600 font-medium hover:text-green-700 transition-colors text-left sm:text-right">Explore offers →</button>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="flex-1 p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all whitespace-nowrap">
              Apply
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white bg-opacity-80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-green-200 shadow-sm space-y-2">
          <div className="flex justify-between">
            <span>Health plan</span>
            <span>₹29,028</span>
          </div>
          <div className="flex justify-between">
            <span>Duration</span>
            <span>{selectedDuration === "6-months" ? "₹15,918" : "₹30,210"}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Stay fit • {selectedDuration === "6-months" ? "6 months" : "12 months"}</span>
            <span></span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹{selectedDuration === "6-months" ? "44,946" : "59,238"}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
