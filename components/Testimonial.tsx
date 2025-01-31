import Image from "next/image";

const testimonials = [
  {
    quote:
      "TechBridge Uganda transformed our business. Their affordable solutions helped us compete in the digital marketplace, increasing our revenue by 40% in just six months.",
    author: "Sarah Namukasa",
    company: "Kampala Crafts Co.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The team's local knowledge combined with their technical expertise made all the difference in our digital transformation. We've seen a 25% increase in productivity since implementing their solutions.",
    author: "David Ochieng",
    company: "Agri-Tech Solutions",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "We saw immediate improvements in our operations after implementing TechBridge's custom software solution. Our customer satisfaction scores have increased by 35%, and we're now expanding to new markets.",
    author: "Grace Atuhaire",
    company: "Entebbe Logistics Ltd.",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                  width={100}
                  height={100}
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
