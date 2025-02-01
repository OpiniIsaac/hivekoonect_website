"use client"
import { useState } from "react";
import { motion } from "framer-motion";
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
    description:
      "Tailored software solutions to optimize your business processes.",
    benefits: [
      "Increased efficiency",
      "Scalable solutions",
      "Competitive advantage",
    ],
  },
  {
    icon: <Smartphone className="w-12 h-12 text-primary" />,
    title: "Mobile & Web App Development",
    description:
      "High-performance mobile and web applications for your business growth.",
    benefits: [
      "Cross-platform compatibility",
      "User-centric design",
      "Seamless user experience",
    ],
  },
  {
    icon: <Cloud className="w-12 h-12 text-primary" />,
    title: "IT Consulting & Cloud Solutions",
    description:
      "Scalable cloud and IT solutions to future-proof your business.",
    benefits: [
      "Cost-effective infrastructure",
      "Enhanced security",
      "Flexible scalability",
    ],
  },
  {
    icon: <Paintbrush className="w-12 h-12 text-primary" />,
    title: "UI/UX & Branding Design",
    description:
      "Beautiful, user-friendly designs that enhance digital experiences.",
    benefits: [
      "Improved user engagement",
      "Brand consistency",
      "Increased conversion rates",
    ],
  },
  {
    icon: <BrainCircuit className="w-12 h-12 text-primary" />,
    title: "AI & Automation Solutions",
    description:
      "Smart AI-driven automation to increase efficiency and innovation.",
    benefits: [
      "Data-driven insights",
      "Process optimization",
      "Predictive analytics",
    ],
  },
  {
    icon: <Cpu className="w-12 h-12 text-primary" />,
    title: "IoT & Smart Solutions",
    description:
      "Innovative IoT solutions to enhance connectivity and automation.",
    benefits: [
      "Real-time monitoring",
      "Enhanced operational efficiency",
      "Scalable IoT architecture",
    ],
  },
];


export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          What We Offer
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We provide cutting-edge solutions to drive your business forward. From
          AI automation to custom software, we have you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-center">
                    {service.icon}
                  </div>
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
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          x: hoveredIndex === index ? 0 : -10,
                        }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
