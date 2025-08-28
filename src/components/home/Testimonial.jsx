import React from "react";

const Testimonial = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black/40">
      {/* Background Image */}
      <img
        src="/your-image.jpg" // replace with your image path
        alt="Happy customers"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 z-10"></div>

      {/* Content */}
      <div className="max-w-3xl text-8xl text-center px-6">
        {/* Stars */}
        <div className="flex justify-center mb-4 space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-2xl">
              ★
            </span>
          ))}
        </div>

        {/* Quote */}
        <p className="text-white  font-serif text-5xl md:text-2xl italic leading-relaxed">
          “FemmeWardrobe Is My Fashion Sanctuary! The Curated Collection
          Effortlessly Blends Chic Trends With Timeless Elegance, Making Every
          Purchase A Delightful Discovery. The Quality Of Their Pieces Is
          Unmatched, And I Appreciate The Brand's Commitment To Sustainable
          Fashion. What Truly Sets FemmeWardrobe Apart Is Their Customer-Centric
          Approach.”
        </p>

        {/* Author */}
        <p className="mt-6 text-white/90 font-semibold uppercase tracking-wider text-sm">
          Sarah M., Devoted FemmeWardrobe Fan
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
