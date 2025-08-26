import React from "react";

const Newtshop = () => {
  return (
    <div
      className="relative h-[150vh] w-full bg-cover bg-center "
      style={{ backgroundImage: "url('Newtshop.jpg')" }}
    >
      {/* Overlay (optional, for readability of text) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Content wrapper */}
      <div className="relative z-10 flex  flex-col md:flex-row h-full px-16 gap-8">
  {/* Product Image */}
  <img
    src="img-c-black.jpg"
    alt="Fashion"
    className="w-1/3 h-auto -mt-36 absolute"  // 🔹 removed absolute
  />
<div>
  <h2 className=" mt-[35rem] z-10 font-serif text-2xl md:text-5xl text-white italic max-w-xl leading-snug">
    Discover the allure of fashion reinvented!
  </h2>
  <p className="text-white max-w-2xl text-xl font-medium ">
Dive into a world of style with our latest collection! Shop now and redefine your wardrobe narrative!</p>
</div>
</div>

    </div>
  );
};

export default Newtshop;
