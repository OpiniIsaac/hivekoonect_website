"use client";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  "Affordable solutions tailored for Ugandan businesses, with flexible payment plans.",
  "Local expertise combined with global best practices.",
  "Proven track record of successful digital transformations, increasing client revenue by 30% on average.",
  "Ongoing support and training for your team, ensuring long-term success.",
  "Scalable solutions that grow with your business, from startups to established companies.",
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Hive Konnect?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Hive Konnect team"
              className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>

          {/* Reasons Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ul className="space-y-5">
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                  <span className="text-gray-700">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
