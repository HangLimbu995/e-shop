"use client";

import Image from "next/image";
import { ShoppingBag, Info } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Home() {
  // Animation state for the three border divs
  const [animateBorders, setAnimateBorders] = useState(false);
  const [showBorders, setShowBorders] = useState([false, false, false]);
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimateBorders(true), 50);
    // Staggered opacity after transform
    setTimeout(() => setShowBorders([true, false, false]), 500);
    setTimeout(() => setShowBorders([true, true, false]), 600);
    setTimeout(() => setShowBorders([true, true, true]), 700);
    setTimeout(() => setShowImage(true), 1200);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* head */}
      <div className="w-full h-[50vh] lg:min-h-[90vh] flex flex-col lg:flex-row justify-between items-center bg-[#DDEB9D] relative">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 py-8 lg:py-0 relative z-10">
          <div className="max-w-xl space-y-1 md:space-y-2 lg:space-y-1 leading-tight text-center lg:text-left">
            <h1 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] font-bold leading-tight text-[#FFFDF6]">
              Huge Discounts on Genuine Products!
            </h1>
            <h2 className="text-[13px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold leading-tight text-[#FFFDF6]">
              Same trusted items. Big savings. Limited stock.
            </h2>
            <p className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-tight max-w-lg mx-auto lg:mx-0 text-[#FAF6E9]">
              We've sold the store, but we still have great stock left. So now
              we're offering massive discounts to clear it — genuine products at
              honest prices, just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-[#A0C878] text-black rounded-full hover:bg-[#8ab366] transition-colors duration-300 text-sm md:text-base">
                🛍️ Shop Now – Before It's Gone
              </button>
              <button className="flex items-center justify-center gap-2 px-6 md:px-8 py-2.5 md:py-3 border-2 border-[#000] text-[#000] rounded-full hover:bg-[#A0C878] hover:text-white hover:border-transparent transition-colors duration-300 text-sm md:text-base">
                <Info size={18} className="md:w-5 md:h-5" />
                About Us
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 lg:relative lg:w-1/2 h-full lg:h-[90vh]">
          <div
            className="w-full h-full flex justify-center items-center"
            style={{ perspective: "1000px" }}
          >
            {/* Decorative left shadows */}
            <div
              className="absolute top-0 left-0 w-full h-full lg:[border-radius:0_0_0_320px] transition-transform duration-500 transition-opacity"
              style={{
                boxShadow: showBorders[0]
                  ? "-16px 0 32px 0 rgba(160,200,120,0.8)"
                  : "none",
                transform: animateBorders
                  ? "translateX(0px) translateZ(0px)"
                  : "translateX(200px) translateZ(0px)",
                opacity: showBorders[0] ? 0.8 : 0,
                transitionDelay: "0ms",
                zIndex: 13,
              }}
            ></div>
            <div
              className="absolute top-0 left-0 w-full h-full lg:[border-radius:0_0_0_320px] transition-transform duration-500 transition-opacity"
              style={{
                boxShadow: showBorders[1]
                  ? "-16px 0 32px 0 rgba(160,200,120,0.6)"
                  : "none",
                transform: animateBorders
                  ? "translateX(48px) translateZ(200px)"
                  : "translateX(200px) translateZ(200px)",
                opacity: showBorders[1] ? 0.6 : 0,
                transitionDelay: "100ms",
                zIndex: 12,
              }}
            ></div>
            <div
              className="absolute top-0 left-0 w-full h-full lg:[border-radius:0_0_0_320px] transition-transform duration-500 transition-opacity"
              style={{
                boxShadow: showBorders[2]
                  ? "-16px 0 32px 0 rgba(160,200,120,0.4)"
                  : "none",
                transform: animateBorders
                  ? "translateX(98px) translateZ(400px)"
                  : "translateX(200px) translateZ(400px)",
                opacity: showBorders[2] ? 0.4 : 0,
                transitionDelay: "200ms",
                zIndex: 11,
              }}
            ></div>
            <div className="relative w-full h-full lg:[border-radius:0_0_0_320px] overflow-hidden z-20">
              <Image
                src="/head-store-pro.avif"
                alt="Store"
                fill
                className="w-full h-full object-cover block transition-all duration-500"
                style={{
                  opacity: showImage ? 1 : 0,
                  transform: showImage ? "translateX(0)" : "translateX(-50px)",
                }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 lg:hidden"></div>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full flex items-end ">
          <div className="px-4 md:px-8 lg:px-16 py-8 lg:py-0 mt-9">
            <h3 className="text-lg font-semibold text-[#A0C878]">
              Our shops are
            </h3>
            <div className="w-auto h-auto relative grid grid-cols-3 gap-4">
              <a
                href="https://www.amazon.com/ref=nav_logo"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center bg-[#A0C878]/60 rounded-[40px] py-4 shadow-md backdrop-blur-md h-[40%] overflow-hidden cursor-pointer transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#A0C878]"
                style={{ textDecoration: "none" }}
              >
                <Image
                  src="/amazon-store.avif"
                  alt="Amazon"
                  fill
                  className="absolute object-cover w-full h-full z-0"
                />
                <div className="glass-card w-full">
                  <div className="w-full h-full flex items-center justify-center text-[#fff] font-semibold text-sm p-4 z-10">
                      <span className="drop-shadow-lg">Amazon Store</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}

      {/* Section 2: Why These Products Are Cheap (But Great) */}
      <div className="w-full min-h-[80vh] flex flex-col lg:flex-row justify-center items-center py-10 lg:py-0 bg-white gap-y-8 lg:gap-x-16">
        {/* Left Column: Image/Story */}
        <div className="w-full lg:w-1/2 h-[40vh] lg:h-[80vh] flex justify-center items-center relative overflow-hidden rounded-lg">
          <Image
            src="/persu.jpeg"
            alt="Quality Story"
            fill
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
              You might wonder – why are the prices so low? It's simple: our
              shop has closed, and we're clearing out the remaining inventory.
              But make no mistake — these are authentic, high-quality products
              we've sold with pride for years.
            </p>
            <ul className="text-left text-[15px] md:text-[17px] lg:text-[16px] text-gray-700 space-y-2 mb-5">
              <li>✔️ Store closed — not quality</li>
              <li>✔️ 100% genuine products</li>
              <li>✔️ Limited-time clearance pricing</li>
              <li>✔️ Family-run store, passing on savings to you</li>
              <li>✔️ No middleman markup</li>
            </ul>
            <p className="text-[14px] md:text-[15px] lg:text-[14px] text-gray-600 italic">
              This is our thank you — to all our loyal customers and new ones
              alike. We'd rather you get the benefit than let good products go
              to waste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
