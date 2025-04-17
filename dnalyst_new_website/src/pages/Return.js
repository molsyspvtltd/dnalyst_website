import React from "react";

export default function Terms() {
  return (
    <div className="bg-[#f9f5f0] text-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Returns & Refunds</h1>
        <p className="mb-4">
          Not satisfied with your order? You can return products within 7 days
          of delivery for a full refund, provided they are unused, sealed, and
          in their original condition.
        </p>
        <ul className="list-disc list-inside">
          <li>Initiate a return by contacting our support team.</li>
          <li>
            Refunds are processed within 5–7 business days after quality check.
          </li>
          <li>Return shipping is free in case of damaged or wrong items.</li>
        </ul>
      </div>
    </div>
  );
}
