"use client";

import Image from "next/image";
import { ShoppingBag, Info } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* head */}
      <div className="w-full h-[50vh] lg:min-h-[90vh] flex flex-col lg:flex-row justify-between items-center bg-[#DDEB9D] relative">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 py-8 lg:py-0 relative z-10">
          <div className="max-w-xl space-y-2 md:space-y-4 lg:space-y-3 leading-none text-center lg:text-left">
            <h1 className="text-[26px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[1.1] md:leading-[1.15] lg:leading-[1.05]">
              <span className="text-[#FAF6E9]">Welcome to </span>
              <span className="text-[#A0C878]">The E Shop</span>
              <span className="text-[#FAF6E9]"> – Final Stock Clearance!</span>
            </h1>
            <h2 className="text-[15px] sm:text-[17px] md:text-[22px] lg:text-[24px] font-semibold text-[#FAF6E9] leading-[1.2] md:leading-[1.25] lg:leading-[1.15]">
              We've sold our store, but not our values. Grab genuine products at
              prices lower than the market.
            </h2>
            <p className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[17px] text-[#FAF6E9]/90 leading-[1.3] md:leading-[1.35] lg:leading-[1.25] max-w-lg mx-auto lg:mx-0">
              We're clearing our remaining stock with love and care – everything
              must go! These aren't leftovers — they're the same high-quality
              items we've proudly sold for years. Now, they're simply priced to
              go.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-[#A0C878] text-white rounded-full hover:bg-[#8ab366] transition-colors duration-300 text-sm md:text-base">
                <ShoppingBag size={18} className="md:w-5 md:h-5" />
                Shop Now – Before It's Gone
              </button>
              <button className="flex items-center justify-center gap-2 px-6 md:px-8 py-2.5 md:py-3 border-2 border-[#FAF6E9] text-[#FAF6E9] rounded-full hover:bg-[#A0C878] hover:text-white hover:border-transparent transition-colors duration-300 text-sm md:text-base">
                <Info size={18} className="md:w-5 md:h-5" />
                About Us
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 lg:relative lg:w-1/2 h-full lg:h-[90vh]">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-full lg:[border-radius:0_0_0_320px] overflow-hidden">
              <img
                src="/head-store-pro.avif"
                alt="Store"
                className="w-full h-full object-cover block"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 lg:hidden"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      

      {/* Section 2: Why These Products Are Cheap (But Great) */}
      <div className="w-full min-h-[80vh] flex flex-col lg:flex-row justify-center items-center py-10 lg:py-0 bg-white gap-y-8 lg:gap-x-16">
        {/* Left Column: Image/Story */}
        <div className="w-full lg:w-1/2 h-[40vh] lg:h-[80vh] flex justify-center items-center relative overflow-hidden rounded-lg">
          <img
            src="/persu.jpeg" // Placeholder image path, please replace with your actual image
            alt="Quality Story"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Optional: Add a text overlay here if you want a short story on top of the image */}
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-12 py-10 lg:py-0 space-y-6">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-gray-800 mb-3">
              Low Prices, Same Trusted Quality
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[17px] text-gray-700 leading-normal mb-5">
              You might wonder – why are the prices so low? It's simple: our shop has closed, and we're clearing out the remaining inventory. But make no mistake — these are authentic, high-quality products we've sold with pride for years.
            </p>
            <ul className="text-left text-[15px] md:text-[17px] lg:text-[16px] text-gray-700 space-y-2 mb-5">
              <li>✔️ Store closed — not quality</li>
              <li>✔️ 100% genuine products</li>
              <li>✔️ Limited-time clearance pricing</li>
              <li>✔️ Family-run store, passing on savings to you</li>
              <li>✔️ No middleman markup</li>
            </ul>
            <p className="text-[14px] md:text-[15px] lg:text-[14px] text-gray-600 italic">
              This is our thank you — to all our loyal customers and new ones alike. We'd rather you get the benefit than let good products go to waste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
