import React from "react";

export default function Terms() {
  return (
    <div className="bg-[#f9f5f0] text-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

        <div className="space-y-6">
          <div>
            <h2 className="font-semibold">
              How long will it take to receive my order?
            </h2>
            <p>
              Typically, orders are delivered within 4–7 business days across
              India.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Do you ship internationally?</h2>
            <p>
              Currently, we only ship within India. International shipping will
              be available soon.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">What is your return policy?</h2>
            <p>
              Returns are accepted within 7 days of delivery. The product must
              be unused and in original packaging.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">How can I track my order?</h2>
            <p>
              Use the “Track Order” link in the footer and enter your order
              number to view real-time updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
