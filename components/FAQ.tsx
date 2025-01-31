"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical digital transformation project take?",
    answer:
      "The duration of a digital transformation project can vary depending on the scope and complexity. Typically, our projects range from 3 to 6 months, but we work closely with you to establish a timeline that meets your specific needs and goals.",
  },
  {
    question: "Can you work with my existing systems and software?",
    answer:
      "Yes, we specialize in integrating new solutions with existing systems. Our team will assess your current infrastructure and develop a plan that maximizes your existing investments while introducing new technologies to improve efficiency and productivity.",
  },
  {
    question: "Do you offer ongoing support after the project is completed?",
    answer:
      "We provide ongoing support and maintenance for all our projects. Our support packages can be tailored to your needs, ranging from basic troubleshooting to comprehensive managed IT services.",
  },
  {
    question:
      "How do you ensure data security during the digital transformation process?",
    answer:
      "Data security is our top priority. We implement industry-standard security protocols and best practices throughout the transformation process. This includes data encryption, secure access controls, and regular security audits to protect your sensitive information.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
