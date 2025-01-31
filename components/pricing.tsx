import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "500,000",
    features: [
      "Basic website development",
      "Social media setup",
      "Email marketing setup",
      "1 month of support",
    ],
  },
  {
    name: "Growth",
    price: "1,500,000",
    features: [
      "Custom web application",
      "E-commerce integration",
      "Basic data analytics",
      "Digital marketing campaign",
      "3 months of support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Full digital transformation strategy",
      "Advanced data analytics",
      "Custom software development",
      "Ongoing IT support and maintenance",
      "Employee training programs",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Affordable Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">
                {plan.price === "Custom" ? "Custom" : `UGX ${plan.price}`}
                {plan.price !== "Custom" && (
                  <span className="text-base font-normal">/month</span>
                )}
              </p>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                Get Started
              </button>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-600">
          Not sure which plan is right for you? Contact us for a personalized
          quote.
        </p>
      </div>
    </section>
  );
}
