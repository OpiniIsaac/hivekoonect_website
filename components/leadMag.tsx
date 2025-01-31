"use client";

import { useState } from "react";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your server or email service
    console.log("Submitted email:", email);
    alert("Thank you! Your free guide will be sent to your email shortly.");
    setEmail("");
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get Your Free Digital Transformation Guide
        </h2>
        <p className="mb-6">
          Learn how to start your digital journey and increase your revenue with
          our comprehensive guide.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-grow px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get Free Guide
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
