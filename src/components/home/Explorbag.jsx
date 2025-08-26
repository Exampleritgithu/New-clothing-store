import React from "react";

const Explorbag = () => {
  return (
    <div
      className="h-[150vh] w-full bg-cover bg-center pt-24 z-10 bg-white relative"
      style={{ backgroundImage: "url('bag-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute w-full h-full inset-0 z-10 bg-black/30"/>
      <div className="h-full w-full  flex justify-end items-center px-12">
        
        
        {/* Right Side Content */}
        <div className="flex flex-col items-end text-center space-y-6 max-w-lg">
          <img src="bag.jpg" alt="Bag" className="w-full h-auto mr-4 mt-16" />

          <h2 className="text-white text-4xl font-serif italic">
            Explore Our Exquisite Bag Collection Now!
          </h2>

          <button className="py-4 px-6 text-white border-2 mr-36 hover:bg-white hover:text-black transition">
            VIEW COLLECTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explorbag;
