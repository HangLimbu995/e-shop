'use client'

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const [showThe, setShowThe] = useState(false);
  const [showE, setShowE] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showFooterInfo, setShowFooterInfo] = useState(false);
  const animRef = useRef(null);

  const animatedWords = [
    {
      text: 'The',
      justify: 'justify-start',
      margin: 'ml-[18vw]',
      showKey: 'showThe',
    },
    {
      text: 'E',
      justify: 'justify-center',
      margin: '',
      showKey: 'showE',
    },
    {
      text: 'Shop',
      justify: 'justify-end',
      margin: 'mr-[10vw]',
      showKey: 'showShop',
    },
  ];

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowThe(true);
          setTimeout(() => setShowE(true), 600);
          setTimeout(() => setShowShop(true), 1200);
          setTimeout(() => setShowFooterInfo(true), 2000);
        }
      },
      { threshold: 0.2 }
    );
    if (animRef.current) observer.observe(animRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bottom-0 w-full h-[130vh] bg-[#A0C878] overflow-hidden">
      <div className="relative w-full h-full ">
        <div className="sticky top-0 w-full h-[50vh] z-80">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123901.10838550111!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e1!3m2!1sen!2snp!4v1751633822038!5m2!1sen!2snp" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="absolute w-full h-[80vh] bg-black z-99" ref={animRef}>
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
            {[
              { left: '5%', top: '10%' },
              { left: '80%', top: '7%' },
              { left: '45%', top: '18%' },
              { left: '15%', top: '40%' },
              { left: '70%', top: '35%' },
              { left: '30%', top: '60%' },
              { left: '60%', top: '65%' },
              { left: '10%', top: '80%' },
              { left: '85%', top: '75%' },
              { left: '50%', top: '90%' },
            ].map((pos, i) => (
              <span
                key={`wm-random-${i}`}
                className="absolute text-xs font-bold uppercase tracking-widest"
                style={{
                  color: '#FAF6E9',
                  opacity: 0.18,
                  left: pos.left,
                  top: pos.top,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                The E Shop
              </span>
            ))}
          </div>
          <div className="absolute inset-0 w-full h-full flex flex-col justify-center pointer-events-none select-none z-100">
            {animatedWords.map((word, idx) => (
              <div key={word.text} className={`w-full flex ${word.justify}`}>
                <span
                  className={`text-[10vw] font-extrabold uppercase tracking-widest leading-none overflow-hidden transition-[max-height] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${word.margin} ${eval(word.showKey) ? 'max-h-[300px]' : 'max-h-0'}`}
                  style={{ color: '#A0C878', userSelect: 'none', display: 'inline-block' }}
                >
                  <span
                    className="block"
                    style={{
                      transition: 'max-height 0.7s cubic-bezier(0.4,0,0.2,1)',
                      maxHeight: eval(word.showKey) ? '300px' : '0',
                      overflow: 'hidden',
                    }}
                  >
                    {word.text}
                  </span>
                </span>
              </div>
            ))}
          </div>
          <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-auto select-none z-200 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${showFooterInfo ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <span className="text-xs sm:text-sm text-[#FAF6E9] opacity-80 font-medium bg-black/60 px-4 py-2 rounded-full">
              © 2025 Reserved by The E Shop
            </span>
          </div>
          <div className={`absolute bottom-16 left-10 flex flex-col gap-2 z-200 pointer-events-auto select-none transition-[max-height] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${showFooterInfo ? 'max-h-[200px]' : 'max-h-0'}`}>
            <Link href="/" className="text-[1.2em] font-medium text-[#FAF6E9] opacity-80 hover:opacity-100 transition-opacity flex items-center gap-1">
              Home <ArrowUpRight size="1.1em" className="inline-block" />
            </Link>
            <Link href="/products" className="text-[1.2em] font-medium text-[#FAF6E9] opacity-80 hover:opacity-100 transition-opacity flex items-center gap-1">
              Products <ArrowUpRight size="1.1em" className="inline-block" />
            </Link>
            <Link href="/about-us" className="text-[1.2em] font-medium text-[#FAF6E9] opacity-80 hover:opacity-100 transition-opacity flex items-center gap-1">
              About Us <ArrowUpRight size="1.1em" className="inline-block" />
            </Link>
          </div>
          <div className={`absolute top-16 right-10 flex flex-col gap-2 items-end z-200 pointer-events-auto select-none transition-[max-height] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${showFooterInfo ? 'max-h-[200px]' : 'max-h-0'}`}>
            <span className="text-[1.2em] text-[#FAF6E9] opacity-80">example@email.com</span>
            <span className="text-[1.2em] text-[#FAF6E9] opacity-80 text-right">6 Appleby Rd, London E16 1LQ, UK</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
