import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center py-12 px-4 sm:px-8 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-[#E0E0E0]">
        <h1 className="text-5xl font-extrabold text-[#1a1a1a] text-center mb-6 leading-tight tracking-normal">About Us</h1>
        
        <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image 
              src="/next/city.avif" 
              alt="Our Story" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-md object-cover w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-[#1a1a1a] mb-4 leading-snug tracking-normal">Our Story</h2>
            <p className="text-[#333333] leading-relaxed mb-4 text-lg font-normal tracking-wide">
              Welcome to The E-Shop! We are a passionate team dedicated to providing high-quality products at unbeatable prices. 
              Our journey began with a simple idea: to create a seamless and enjoyable shopping experience for everyone.
            </p>
            <p className="text-[#333333] leading-relaxed text-lg font-normal tracking-wide">
              We believe in transparency, integrity, and putting our customers first. Every product is carefully selected,
              ensuring that you receive nothing but the best. We're constantly striving to expand our offerings and improve our services.
            </p>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-[#1a1a1a] mb-4 leading-snug tracking-normal">Our Mission</h2>
          <p className="text-[#333333] leading-relaxed max-w-2xl mx-auto text-lg font-normal tracking-wide">
            Our mission is to become your go-to destination for all your shopping needs, offering a diverse range of genuine products
            with exceptional value. We are committed to making quality accessible to everyone.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#1a1a1a] mb-4 leading-snug tracking-normal">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-[#333333] space-y-2 inline-block text-left text-lg font-normal leading-relaxed tracking-wide">
            <li>Genuine products at honest prices.</li>
            <li>Massive discounts on remaining stock.</li>
            <li>Easy and secure shopping experience.</li>
            <li>Dedicated customer support.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
