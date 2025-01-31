import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Digital Transformation for Businesses
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Affordable, tailored tech solutions to improve operations, boost
          customer engagement, and drive growth for businesses in Uganda.
        </p>
        <Link
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 inline-block"
        >
          Start Your Digital Journey
        </Link>
      </div>
    </section>
  );
}
