import React from "react";

export default function Terms() {
  return (
    <div className="bg-[#f9f5f0] text-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Track Your Order</h1>
        <p className="mb-4">
          Enter your order number and email below to get real-time tracking
          updates.
        </p>
        <form className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Order Number"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-[#CC5500] text-white px-6 py-2 rounded hover:bg-[#b64900]"
          >
            Track Order
          </button>
        </form>
      </div>
    </div>
  );
}
