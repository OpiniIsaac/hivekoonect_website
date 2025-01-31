import React from "react";

export default function CTA() {
  return (
    <section id="contact" className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to transform your IT strategy?
        </h2>
        <p className="text-xl mb-8">Contact us today for a free consultation</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
          Get in Touch
        </button>
      </div>
    </section>
  );
}
