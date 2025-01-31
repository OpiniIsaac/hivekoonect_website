const caseStudies = [
  {
    title: "Local Retailer's E-commerce Success",
    description:
      "Helped a Kampala-based retailer increase sales by 150% through a new e-commerce platform and digital marketing strategy.",
    image: "/placeholder.svg?height=200&width=300",
    result: "150% increase in sales",
  },
  {
    title: "Agricultural Co-op's Data Revolution",
    description:
      "Implemented data analytics for a rural co-op, improving crop yields by 30% and optimizing supply chain efficiency.",
    image: "/placeholder.svg?height=200&width=300",
    result: "30% improvement in crop yields",
  },
  {
    title: "Tech Start-up's Rapid Growth",
    description:
      "Provided IT infrastructure and custom software for a local start-up, supporting their expansion from 5 to 50 employees in just one year.",
    image: "/placeholder.svg?height=200&width=300",
    result: "10x growth in one year",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block">
                  {study.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
