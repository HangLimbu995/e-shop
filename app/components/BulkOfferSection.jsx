'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function BulkOfferSection() {
  const sectionRef = useRef(null);
  const [imageTranslateY, setImageTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Define the parallax speed. A negative value makes the image move UP as we scroll DOWN.
      // Adjust this value for desired speed. Smaller absolute value = slower movement.
      const parallaxSpeed = -0.15; // Example: moves 15% of scroll distance in opposite direction

      // Calculate the translateY based on scroll position
      setImageTranslateY(currentScrollY * parallaxSpeed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-[70vh] sm:h-[80vh] md:h-[54vh] relative overflow-hidden flex items-center justify-center"
    >
      {/* The actual container that defines the parallax viewport */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden"> 
        {/* Background Image Container (taller than its parent, moved for parallax) */}
        <div
          className="absolute w-full h-[200%] left-0" // Image is 200% tall to ensure full coverage during parallax movement
          style={{
            top: '-50%', // Initial vertical position: Centers the 200% image vertically within the 100% view.
            transform: `translateY(${imageTranslateY}px)`,
            transition: 'transform 0.3s ease-out', // Smooth transition for movement
          }}
        >
          <Image
            src="/next/city.avif"
            alt="City Background"
            fill
            className="object-cover"
            loading="lazy"
            priority={false}
            sizes="100vw"
            quality={100}
          />
        </div>
      </div>

      {/* Overlay (always on top of the moving background) */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-2xl">
        <h1 className="text-5xl font-extrabold text-[#A0C878] drop-shadow-lg mb-2 leading-tight tracking-normal">
          Bulk Deals
        </h1>
        <h2 className="text-3xl font-semibold text-[#FFC26F] mb-3 leading-snug tracking-normal">
          Buy Big. Save Big.
        </h2>
        <p className="text-[#FAF6E9] text-lg mb-6 leading-relaxed drop-shadow font-normal tracking-wide">
          Get exclusive rates when you purchase all remaining stock. Let's talk.
        </p>
        <button className="px-6 py-3 rounded-full bg-[#A0C878] text-[#333333] font-normal shadow-xl hover:shadow-2xl transition duration-200 hover:-translate-y-1 hover:bg-[#8ab366] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
          Contact Us
        </button>
      </div>
    </section>
  );
} 