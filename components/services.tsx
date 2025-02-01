"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Smartphone,
  Cloud,
  Paintbrush,
  BrainCircuit,
  ArrowRight,
  Cpu,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Code className="w-12 h-12 text-primary" />,
    title: "Custom Software Development",
    description: "Tailored software solutions to optimize your business.",
    benefits: [
      "Increased efficiency",
      "Scalable solutions",
      "Competitive edge",
    ],
  },
  {
    icon: <Smartphone className="w-12 h-12 text-primary" />,
    title: "Mobile & Web App Development",
    description: "High-performance applications to grow your business.",
    benefits: ["Cross-platform", "User-centric design", "Seamless UX"],
  },
  {
    icon: <Cloud className="w-12 h-12 text-primary" />,
    title: "Cloud & IT Consulting",
    description: "Scalable cloud solutions to future-proof your business.",
    benefits: ["Cost-effective", "Enhanced security", "Scalability"],
  },
  {
    icon: <Paintbrush className="w-12 h-12 text-primary" />,
    title: "UI/UX & Branding",
    description: "Stunning, user-friendly digital experiences.",
    benefits: ["Better engagement", "Brand consistency", "Higher conversions"],
  },
  {
    icon: <BrainCircuit className="w-12 h-12 text-primary" />,
    title: "AI & Automation",
    description: "AI-driven automation for efficiency & innovation.",
    benefits: ["Data insights", "Process optimization", "Predictive analytics"],
  },
  {
    icon: <Cpu className="w-12 h-12 text-primary" />,
    title: "IoT & Smart Solutions",
    description: "Smart solutions for automation & connectivity.",
    benefits: [
      "Real-time monitoring",
      "Operational efficiency",
      "Scalable IoT",
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-6 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We provide innovative solutions tailored to meet your business needs.
        </motion.p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <motion.div
                    className="mb-4 flex items-center justify-center"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-semibold text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-center mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
