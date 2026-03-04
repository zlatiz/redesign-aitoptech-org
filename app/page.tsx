export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-10 lg:px-40 py-5">
        <div className="max-w-[1200px] mx-auto mt-8">
          <div
            className="flex min-h-[600px] flex-col gap-8 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 shadow-2xl relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(17, 33, 23, 0.7), rgba(17, 33, 23, 0.8)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")`,
            }}
          >
            <h1 className="text-white text-5xl font-black leading-tight tracking-tight lg:text-7xl text-center max-w-4xl z-10">
              Ai TOP TECHNOLOGIES
            </h1>
            <p className="text-slate-200 text-xl md:text-2xl text-center max-w-2xl font-light z-10 mb-4">
              Pioneering intelligent solutions for a connected tomorrow.
            </p>
            <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary hover:bg-primary/90 transition-colors text-white text-base font-bold leading-normal tracking-wide shadow-lg z-10">
              <span className="truncate">Discover Our Vision</span>
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Identity Section */}
      <section className="px-10 lg:px-40 py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="border-l-4 border-primary pl-6">
            <h2 className="text-text-primary text-3xl font-bold leading-tight tracking-tight pb-4 uppercase">
              Corporate Identity
            </h2>
            <p className="text-text-secondary text-lg font-normal leading-relaxed max-w-3xl">
              Ai Top Technologies LLC Registered in Delaware, USA. We are
              committed to delivering cutting-edge artificial intelligence and
              technological frameworks that empower enterprise-scale
              transformation globally.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}