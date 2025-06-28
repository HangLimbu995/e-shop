"use client";

import Image from "next/image";
import { ShoppingBag, Info } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Home() {
  // Animation state for the three border divs
  const [animateBorders, setAnimateBorders] = useState(false);
  const [showBorders, setShowBorders] = useState([false, false, false]);
  const [showImage, setShowImage] = useState(false);

  // Text animation states
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showShopTitle, setShowShopTitle] = useState(false);
  const [showShopLinks, setShowShopLinks] = useState(false);
  const [showSectionTitle, setShowSectionTitle] = useState(false);
  const [showSectionText, setShowSectionText] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showFinalText, setShowFinalText] = useState(false);

  // Typewriter animation state
  const [typewriterText, setTypewriterText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Huge Discounts on Genuine Products!";

  // Function to get random chocolate image
  const getRandomChocoImage = () => {
    const allImages = [
      "/choco-1.avif",
      "/choco-2.avif", 
      "/choco-3.avif",
      "/choco-4.avif",
      "/choco-5.avif",
      "/gift-1.avif",
      "/gift-2.avif",
      "/gift-3.avif",
      "/sta-1.avif",
      "/sta-2.avif",
      "/sta-3.avif"
    ];
    return allImages[Math.floor(Math.random() * allImages.length)];
  };

  // Function to get random aspect ratio for varying heights
  const getRandomAspectRatio = () => {
    const aspectRatios = [
      "aspect-square",      // 1:1
      "aspect-[4/3]",       // 4:3
      "aspect-[3/4]",       // 3:4 (taller)
      "aspect-[5/4]",       // 5:4
      "aspect-[4/5]",       // 4:5 (taller)
      "aspect-[3/2]",       // 3:2
      "aspect-[2/3]",       // 2:3 (taller)
    ];
    return aspectRatios[Math.floor(Math.random() * aspectRatios.length)];
  };

  // Generate random images for the grid
  const [gridImages, setGridImages] = useState([]);

  useEffect(() => {
    // Generate 30 random images (6 columns × 5 rows) with aspect ratios
    const images = Array.from({ length: 30 }, () => ({
      src: getRandomChocoImage(),
      aspectRatio: getRandomAspectRatio()
    }));
    setGridImages(images);

    // Border animations
    setTimeout(() => setAnimateBorders(true), 50);
    setTimeout(() => setShowBorders([true, false, false]), 500);
    setTimeout(() => setShowBorders([true, true, false]), 600);
    setTimeout(() => setShowBorders([true, true, true]), 700);
    setTimeout(() => setShowImage(true), 1200);

    // Text animations - staggered sequence
    setTimeout(() => setShowTitle(true), 300);
    setTimeout(() => setShowSubtitle(true), 500);
    setTimeout(() => setShowDescription(true), 700);
    setTimeout(() => setShowButtons(true), 900);
    setTimeout(() => setShowShopTitle(true), 1100);
    setTimeout(() => setShowShopLinks(true), 1300);

    // Section 2 animations (triggered when scrolling into view or after a delay)
    setTimeout(() => setShowSectionTitle(true), 1500);
    setTimeout(() => setShowSectionText(true), 1700);
    setTimeout(() => setShowList(true), 1900);
    setTimeout(() => setShowFinalText(true), 2100);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (showTitle && currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypewriterText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100); // Speed of typing

      return () => clearTimeout(timeout);
    }
  }, [showTitle, currentIndex, fullText]);

  // Function to render text with colored words and selective typewriter effect
  const renderTypewriterText = () => {
    const words = typewriterText.split(" ");
    const fullWords = fullText.split(" ");

    return fullWords.map((word, index) => {
      // Remove punctuation for comparison but keep it in the display
      const cleanWord = word.replace(/[!.,?]/g, "").toLowerCase();
      const isColored = cleanWord === "discounts" || cleanWord === "products";

      // For colored words, we need to check character by character
      if (isColored) {
        // Find how many characters of this word should be shown
        let charsToShow = 0;
        let currentCharCount = 0;

        for (let i = 0; i < fullWords.length; i++) {
          const currentWord = fullWords[i];
          const currentCleanWord = currentWord
            .replace(/[!.,?]/g, "")
            .toLowerCase();
          const isCurrentColored =
            currentCleanWord === "discounts" || currentCleanWord === "products";

          if (i < index) {
            // Words before this one
            currentCharCount += currentWord.length + 1; // +1 for space
          } else if (i === index) {
            // This is the current word
            if (isCurrentColored) {
              // Calculate how many characters of this word should be shown
              const availableChars = Math.max(
                0,
                typewriterText.length - currentCharCount
              );
              charsToShow = Math.min(availableChars, currentWord.length);
            } else {
              charsToShow = currentWord.length;
            }
            break;
          }
        }

        // Show only the typed characters of this word
        const visiblePart = word.slice(0, charsToShow);

        return (
          <span key={index} className="text-[#A0C878]">
            {visiblePart}
            {index < fullWords.length - 1 ? " " : ""}
          </span>
        );
      }

      // Non-colored words appear immediately
      return (
        <span key={index}>
          {word}
          {index < fullWords.length - 1 ? " " : ""}
        </span>
      );
    });
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* head */}
      <div className="w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:min-h-[90vh] flex flex-col lg:flex-row justify-between items-center bg-[#DDEB9D] relative">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 lg:py-0 relative z-10">
          <div className="max-w-xl space-y-2 sm:space-y-3 md:space-y-2 lg:space-y-1 leading-tight text-center lg:text-left">
            <h1
              className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-tight text-[#FFFDF6] transition-all duration-700 ease-out min-h-[1.2em]"
              style={{
                opacity: showTitle ? 1 : 0,
                transform: showTitle ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {renderTypewriterText()}
              <span className="animate-pulse">|</span>
            </h1>
            <h2
              className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold leading-tight text-[#FFFDF6] transition-all duration-700 ease-out"
              style={{
                opacity: showSubtitle ? 1 : 0,
                transform: showSubtitle ? "translateY(0)" : "translateY(20px)",
              }}
            >
              Same trusted items. Big savings. Limited stock.
            </h2>
            <p
              className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] leading-relaxed max-w-lg mx-auto lg:mx-0 text-[#FAF6E9] transition-all duration-700 ease-out"
              style={{
                opacity: showDescription ? 1 : 0,
                transform: showDescription
                  ? "translateY(0)"
                  : "translateY(20px)",
              }}
            >
              We've sold the store, but we still have great stock left. So now
              we're offering massive discounts to clear it — genuine products at
              honest prices, just for you.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 sm:mt-8 lg:mt-4 justify-center lg:justify-start transition-all duration-700 ease-out"
              style={{
                opacity: showButtons ? 1 : 0,
                transform: showButtons ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <button className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-3 bg-[#A0C878] text-black rounded-full hover:bg-[#8ab366] transition-all duration-300 text-sm md:text-base font-medium hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
                🛍️ Shop Now – Before It's Gone
              </button>
              <button className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-3 border-2 border-[#000] text-[#000] rounded-full hover:bg-[#A0C878] hover:text-white hover:border-transparent transition-all duration-300 text-sm md:text-base font-medium hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
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
      </div>

      {/* Main Content Area */}

      {/* Section 2: Why These Products Are Cheap (But Great) */}

      <div className="w-full h-full max-h-[100vh] overflow-hidden p-2">
        <div className="w-full h-full  z-30">
          <div className="w-full h-full relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
            {/* Column 1 */}
            <div className="w-full h-full flex flex-col gap-2">
              <div className="relative w-full aspect-square overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/choco-1.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/gift-2.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/sta-1.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[5/4] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/choco-3.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/gift-1.avif" fill alt="img" className="object-cover" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="w-full h-full flex flex-col gap-2">
              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/sta-2.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-square overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/choco-2.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/gift-3.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/sta-3.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/choco-4.avif" fill alt="img" className="object-cover" />
              </div>
            </div>

            {/* Column 3 */}
            <div className="w-full h-full flex flex-col gap-2">
              <div className="relative w-full aspect-[5/4] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/gift-1.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/choco-5.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-square overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/sta-1.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/gift-2.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/choco-1.avif" fill alt="img" className="object-cover" />
              </div>
            </div>

            {/* Column 4 */}
            <div className="w-full h-full flex flex-col gap-2">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/sta-2.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/choco-3.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[5/4] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/gift-3.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-square overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/sta-3.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/choco-2.avif" fill alt="img" className="object-cover" />
              </div>
            </div>

            {/* Column 5 */}
            <div className="w-full h-full flex flex-col gap-2">
              <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/gift-1.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/choco-4.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/sta-1.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/gift-2.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[5/4] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/choco-5.avif" fill alt="img" className="object-cover" />
              </div>
            </div>

            {/* Column 6 */}
            <div className="w-full h-full flex flex-col gap-2">
              <div className="relative w-full aspect-square overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/sta-2.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/choco-1.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/gift-3.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/sta-3.avif" fill alt="img" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <Image src="/choco-3.avif" fill alt="img" className="object-cover" />
              </div>
            </div>
          </div>
          <div className="glass-card w-[80vw] h-[80vh]"></div>
        </div>
      </div>

  
    </div>
  );
}
