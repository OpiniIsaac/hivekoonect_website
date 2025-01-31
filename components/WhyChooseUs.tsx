import { CheckCircle } from "lucide-react";

const reasons = [
  "Affordable solutions tailored for Ugandan businesses, with flexible payment plans",
  "Local expertise combined with global best practices",
  "Proven track record of successful digital transformations, increasing client revenue by 30% on average",
  "Ongoing support and training for your team, ensuring long-term success",
  "Scalable solutions that grow with your business, from startups to established companies",
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose TechBridge Uganda?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="TechBridge Uganda team"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
