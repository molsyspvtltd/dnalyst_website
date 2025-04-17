import React from "react";

export default function Terms() {
  return (
    <div className="bg-[#f9f5f0] text-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Shipping Information</h1>
        <p className="mb-4">
          We offer standard shipping across India. Orders are processed within
          1-2 business days and delivered within 4–7 business days.
        </p>
        <ul className="list-disc list-inside">
          <li>Shipping is free for all prepaid orders above ₹499.</li>
          <li>Cash on Delivery (COD) is available with an extra ₹50 charge.</li>
          <li>
            You’ll receive a tracking link via email/SMS once your order is
            shipped.
          </li>
        </ul>
      </div>
    </div>
  );
}
