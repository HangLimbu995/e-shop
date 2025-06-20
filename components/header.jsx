'use client'

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setSlideIn(true), 50);
    setTimeout(() => setShowShadow(true), 600);
  }, []);

  return (
    <div
      className={`relative z-20 w-full flex justify-center bg-[#DDEB9D] py-2 px-4 transition-all duration-500`}
      style={showShadow ? { boxShadow: '0 4px 16px 0 #A0C878' } : {}}
    >
      <div className="container w-full h-auto py-2 px-4">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className={`transition-all duration-500 ${slideIn ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
            <Link href="/" className="text-[#A0C878] font-bold text-xl">
              The E Shop
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Nav items */}
          <nav className="hidden lg:block">
            <ul className={`flex gap-6 transition-all duration-500 ${slideIn ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
              <li>
                <Link href="/" className="text-[#FAF6E9] hover:text-[#A0C878] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#FAF6E9] hover:text-[#A0C878] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-[#FAF6E9] hover:text-[#A0C878] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed top-[60px] left-0 w-full bg-[#DDEB9D] transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <nav className="p-4">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="/"
                    className="text-[#FAF6E9] hover:text-[#A0C878] transition-colors block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-[#FAF6E9] hover:text-[#A0C878] transition-colors block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-[#FAF6E9] hover:text-[#A0C878] transition-colors block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
