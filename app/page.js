"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen  flex justify-center items-center ">
      <div className="w-full h-full flex justify-between items-center bg-[#DDEB9D]">
        <div className="w-full h-full "></div>
        <div
          className="w-64 h-40 relative overflow-hidden"
          style={{
            clipPath: `path('M0 0 H256 V160 L77 160 Q0 120 0 0 Z')`,
            backgroundImage: 'url("/next/out/head-store.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="w-full h-full relative"
          style={{
            clipPath: `path('M0 0 H256 V160 L77 160 Q0 120 0 0 Z')`,
          }}
        >
          <img
            src="/next/out/head-store.jpeg"
            alt="Store"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
