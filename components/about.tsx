import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              About Hive Konnect
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hive Konnect is a leading software solutions provider, dedicated
              to delivering innovative and scalable technology solutions. Our
              team of expert developers and IT professionals work tirelessly to
              transform your ideas into reality.
            </p>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              With a focus on cutting-edge technologies and best practices in
              software development, we ensure that our clients stay ahead in the
              rapidly evolving digital landscape.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              alt="About Hive Konnect"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="310"
              src="/placeholder.svg?height=310&width=550"
              width="550"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
