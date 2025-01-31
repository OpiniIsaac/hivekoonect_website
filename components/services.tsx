import { Laptop, BarChart, Users, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: <Laptop className="w-12 h-12 text-blue-600" />,
    title: "Custom Software Solutions",
    description:
      "Tailored software to streamline your business processes and increase efficiency.",
  },
  {
    icon: <BarChart className="w-12 h-12 text-blue-600" />,
    title: "Data Analytics",
    description:
      "Turn your data into actionable insights to make informed business decisions.",
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: "Digital Marketing",
    description:
      "Reach and engage your target audience through effective online marketing strategies.",
  },
  {
    icon: <ShoppingBag className="w-12 h-12 text-blue-600" />,
    title: "E-commerce Solutions",
    description:
      "Set up and optimize your online store to tap into the growing digital market.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
