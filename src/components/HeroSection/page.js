import React from 'react';

export default function HeroSection() {
  return (
   <main className="min-h-screen flex bg-[#f8d8d8] text-[#1c1c1c] font-sans">
      {/* Left section */}
      <section className="w-1/2 flex flex-col justify-center pl-20 pr-10 relative">
        

        <div className="mt-20 space-y-6">
          <h1 className="text-7xl font-bold leading-tight relative">
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-yellow-300 rotate-[-2deg] z-0" />
              <span className="relative z-10">Digital</span>
            </span>
            <br />
            agency<span className="text-5xl align-top ml-2">.</span>
          </h1>

          <p className="max-w-md text-lg text-[#4b4b4b]">
            We create world-class digital products<br />
            materials that communicate clearly.
          </p>

          <button className="flex items-center space-x-3 bg-black text-white py-2 px-4 rounded-full w-max">
            <span className="text-2xl">→</span>
            <span>Discover crafto</span>
          </button>
        </div>

        {/* Vertical text */}
        <div className="absolute bottom-10 left-0 rotate-[-90deg] origin-left text-xs tracking-widest uppercase font-semibold">
          Award Winning Agency
        </div>
      </section>

      {/* Right section (image placeholder) */}
      <section className="w-1/2 bg-gray-200 flex items-center justify-center">
        {/* Replace below with your image */}
        <div className="text-gray-500">[ Image goes here ]</div>
      </section>
    </main>
  );
}
