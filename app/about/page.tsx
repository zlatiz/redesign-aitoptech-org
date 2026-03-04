export default function AboutPage() {
  return (
    <section className="px-10 lg:px-40 py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="border-l-4 border-primary pl-6">
          <h1 className="text-text-primary text-4xl lg:text-5xl font-bold leading-tight tracking-tight pb-6 uppercase">
            About Us
          </h1>
          <div className="space-y-6 text-text-secondary text-lg font-normal leading-relaxed max-w-3xl">
            <p>
              Ai Top Technologies LLC is registered in Delaware, USA. We are
              committed to delivering cutting-edge artificial intelligence and
              technological frameworks that empower enterprise-scale
              transformation globally.
            </p>
            <p>
              Our mission is to pioneer intelligent solutions for a connected
              tomorrow. We specialize in artificial intelligence, machine
              learning, and advanced technological frameworks that help
              businesses transform and scale their operations.
            </p>
            <p>
              With a focus on innovation and excellence, we work with
              enterprises worldwide to implement cutting-edge solutions that
              drive meaningful business outcomes and create lasting value.
            </p>
          </div>
        </div>

        <div className="mt-16 border-l-4 border-primary pl-6">
          <h2 className="text-text-primary text-3xl font-bold leading-tight tracking-tight pb-4 uppercase">
            Our Commitment
          </h2>
          <p className="text-text-secondary text-lg font-normal leading-relaxed max-w-3xl">
            We are dedicated to empowering enterprise-scale transformation
            through innovative artificial intelligence and technological
            solutions. Our team of experts works tirelessly to deliver
            world-class services and products.
          </p>
        </div>
      </div>
    </section>
  );
}