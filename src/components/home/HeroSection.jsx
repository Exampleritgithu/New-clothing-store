import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center mr-40">
      {/* Background Image */}
      <img
        src="/your-image.jpg" // replace with your image path
        alt="Fashion Model"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* Content (Right Side) */}
      <div className=" pt-96 container mx-auto px-24 lg:px-12 flex justify-end">
        <div className="max-w-xl text-left text-white">
          <p className="uppercase tracking-widest  mb-3 mt-64">Explore</p>
          <h1 className="text-2xl md:text-5xl font-serif italic  leading-tight mb-6">
            Elevate Your Wardrobe, <br /> Embrace Timeless Style!
          </h1>
          <p className="text-xl mb-8">
            Explore our collections today and experience the joy of fashion.
            Shop now for the epitome of chic sophistication!
          </p>
          <button className="px-6 py-3 mt-10 border border-white text-white uppercase tracking-wide hover:bg-white hover:text-black transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
