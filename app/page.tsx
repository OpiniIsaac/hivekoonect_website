import CaseStudies from "@/components/caseStudies";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </main>
  );
}
