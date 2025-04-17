import React from "react";

export default function Customer() {
  return (
    <div className="bg-[#f9f5f0] text-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Customer Support</h1>
        <p className="mb-4">
          Need help? Our support team is available Monday to Saturday from 10:00
          AM to 6:00 PM IST.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            📧 Email: <strong>support@elegantbrand.com</strong>
          </li>
          <li>📞 Phone: +91 98765 43210</li>
          <li>
            📍 Yenepoya Technology Incubator Yenepoya (deemed-to-be) University
            Deralakatte, Ullal, DK Pin: 575020
          </li>
        </ul>
        <p className="mt-4">
          We usually respond within 24–48 hours. Whether it’s an order issue,
          product inquiry, or general feedback — we’re here for you!
        </p>
      </div>
    </div>
  );
}
