"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Code, text: "Custom Software" },
  { icon: Smartphone, text: "Mobile Apps" },
  { icon: BarChart, text: "Data Analytics" },
];

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.08] bg-[size:30px_30px] opacity-20" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
        >
          Empowering Businesses
          <br />
          with Digital Innovation
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
        >
          Affordable and customized tech solutions designed to enhance
          operations, boost engagement, and drive growth for businesses in
          Uganda.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full font-semibold px-8 py-3 text-lg bg-yellow-500 hover:bg-yellow-600"
          >
            <Link href="#contact">
              Start Your Digital Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-white/10 rounded-lg shadow-lg backdrop-blur-md transition-transform"
            >
              <div className="bg-white/20 p-4 rounded-full">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <span className="mt-3 text-lg font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-900/50 to-transparent"
      />
    </section>
  );
}
