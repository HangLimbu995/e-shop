"use client";

import Image from "next/image";
import { ShoppingBag, Info, Gift, BookOpen, PenLine, Pencil, Candy, Milk } from "lucide-react";
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

  // Add state for scroll offset
  const [scrollY, setScrollY] = useState(0);

  // Set a base offset to center columns vertically
  const baseOffset = -90; // Increased negative offset for better centering on tablet

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
      "/sta-3.avif",
    ];
    return allImages[Math.floor(Math.random() * allImages.length)];
  };

  // Function to get random aspect ratio for varying heights
  const getRandomAspectRatio = () => {
    const aspectRatios = [
      "aspect-square", // 1:1
      "aspect-[4/3]", // 4:3
      "aspect-[3/4]", // 3:4 (taller)
      "aspect-[5/4]", // 5:4
      "aspect-[4/5]", // 4:5 (taller)
      "aspect-[3/2]", // 3:2
      "aspect-[2/3]", // 2:3 (taller)
    ];
    return aspectRatios[Math.floor(Math.random() * aspectRatios.length)];
  };

  // Generate random images for the grid
  const [gridImages, setGridImages] = useState([]);

  useEffect(() => {
    // Generate 30 random images (6 columns × 5 rows) with aspect ratios
    const images = Array.from({ length: 30 }, () => ({
      src: getRandomChocoImage(),
      aspectRatio: getRandomAspectRatio(),
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update the transition to be longer and smoother
  const columnTransition = "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)";

  // Add this before the return statement
  const categoryIcons = {
    "Gift Card": <Gift className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline-block" />, 
    "Stationary": <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline-block" />, 
    "Pens": <PenLine className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline-block" />, 
    "Pencils": <Pencil className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline-block" />, 
    "Chocolates": <Candy className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline-block" />, 
    "Cadbury Dairy Milk": <Milk className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline-block" />, 
    "Kit Kat": <Candy className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline-block" />,
  };

  // Add this above the return statement
  const staticGridImages = [
    [
      { src: '/choco-1.avif', aspect: 'aspect-square' },
      { src: '/gift-2.avif', aspect: 'aspect-[4/3]' },
      { src: '/sta-1.avif', aspect: 'aspect-[3/4]' },
      { src: '/choco-3.avif', aspect: 'aspect-[5/4]' },
      { src: '/gift-1.avif', aspect: 'aspect-[4/5]' },
    ],
    [
      { src: '/sta-2.avif', aspect: 'aspect-[3/2]' },
      { src: '/choco-2.avif', aspect: 'aspect-square' },
      { src: '/gift-3.avif', aspect: 'aspect-[2/3]' },
      { src: '/sta-3.avif', aspect: 'aspect-[4/3]' },
      { src: '/choco-4.avif', aspect: 'aspect-[3/4]' },
    ],
    [
      { src: '/gift-1.avif', aspect: 'aspect-[5/4]' },
      { src: '/choco-5.avif', aspect: 'aspect-[4/5]' },
      { src: '/sta-1.avif', aspect: 'aspect-square' },
      { src: '/gift-2.avif', aspect: 'aspect-[3/2]' },
      { src: '/choco-1.avif', aspect: 'aspect-[2/3]' },
    ],
    [
      { src: '/sta-2.avif', aspect: 'aspect-[4/3]' },
      { src: '/choco-3.avif', aspect: 'aspect-[3/4]' },
      { src: '/gift-3.avif', aspect: 'aspect-[5/4]' },
      { src: '/sta-3.avif', aspect: 'aspect-square' },
      { src: '/choco-2.avif', aspect: 'aspect-[4/5]' },
    ],
    [
      { src: '/gift-1.avif', aspect: 'aspect-[2/3]' },
      { src: '/choco-4.avif', aspect: 'aspect-[3/2]' },
      { src: '/sta-1.avif', aspect: 'aspect-[4/3]' },
      { src: '/gift-2.avif', aspect: 'aspect-[3/4]' },
      { src: '/choco-5.avif', aspect: 'aspect-[5/4]' },
    ],
    [
      { src: '/sta-2.avif', aspect: 'aspect-square' },
      { src: '/choco-1.avif', aspect: 'aspect-[4/5]' },
      { src: '/gift-3.avif', aspect: 'aspect-[2/3]' },
      { src: '/sta-3.avif', aspect: 'aspect-[3/2]' },
      { src: '/choco-3.avif', aspect: 'aspect-[4/3]' },
    ],
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* head */}
      <section className="w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:min-h-[90vh] flex flex-col lg:flex-row justify-between items-center bg-[#DDEB9D] relative">
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
      </section>

      {/* Main Content Area */}

      {/* Section 2: Why These Products Are Cheap (But Great) */}

      <section className="w-full h-full max-h-[60vh] sm:max-h-[65vh] md:max-h-[60vh] lg:max-h-[100vh] p-2 mb-4 rounded-xl">
        <div className="w-full h-full  z-30 relative ">
          <div className="glass-card h-[60vh] md:h-[60vh] absolute top-0 left-0 w-full lg:h-[100vh] min-h-[220px] z-[999] flex flex-col items-center justify-center text-center px-3 sm:px-6 md:px-10 py-6 md:py-10">
            <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl mx-auto space-y-2 sm:space-y-3 md:space-y-4 md:translate-y-[-20%] lg:translate-y-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg leading-tight">
                Why Are These Products So Cheap?
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#A0C878] drop-shadow leading-tight">
                We're clearing out our genuine stock
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/90 drop-shadow max-w-xl mx-auto leading-relaxed">
                We've sold the store, but we still have great products left.
                That's why you're seeing massive discounts—everything is
                authentic, and we're passing the savings on to you. Grab these
                deals before they're gone!
              </p>
              <a
                href="/about-us"
                className="inline-block w-full sm:w-auto mt-2 px-6 py-3 bg-[#A0C878] text-black rounded-full font-semibold shadow hover:bg-[#8ab366] transition-all duration-300 text-base md:text-lg"
              >
                About Us
              </a>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-[60vh] md:h-[60vh] lg:h-full lg:h-[100vh] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 rounded-xl overflow-hidden">
            {staticGridImages.slice(0, 5).map((col, colIdx) => (
            <div
                key={colIdx}
              className="w-full h-full flex flex-col gap-2"
              style={{
                  transform: `translateY(calc(${baseOffset}px + ${scrollY * 0.1 * (colIdx % 2 === 0 ? 1 : -1)}px))`,
                transition: columnTransition,
              }}
            >
                {col.map((img, imgIdx) => (
                  <div key={imgIdx} className={`relative w-full ${img.aspect} overflow-hidden rounded-lg md:min-h-[110px]`}>
                    <Image src={img.src} fill alt="img" className="object-cover" />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                          'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.7) 100%)',
                  }}
                ></div>
              </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#A0C878] py-10 sm:py-14 md:py-20 flex items-center justify-center">
        <div className="w-full max-w-2xl flex flex-col items-center justify-center text-center px-4 sm:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#234D20] mb-2 leading-tight">Special Bulk Offer</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#234D20] mb-4 leading-snug">For Bulk or All Stock Purchase</h2>
          <p className="text-base sm:text-lg text-[#234D20] mb-6 max-w-md leading-snug opacity-60">Looking to buy in bulk or clear out all remaining stock? Get exclusive pricing and personalized service for large orders. Contact us for a custom quote!</p>
          <button className="px-6 py-2 rounded-full bg-[#234D20] text-white font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFFDF6] focus:ring-offset-2 hover:-translate-y-1">
            Contact Us
          </button>
        </div>
      </section>

      <section className="w-full bg-[#F8FAF4] py-10 sm:py-14 md:py-20 flex items-center justify-center">
        <div className="w-full max-w-5xl flex flex-col items-center justify-center text-center px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#234D20] mb-6">Available Categories</h2>
          <div className="relative w-full overflow-hidden">
            {/* Left mask */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to right, #F8FAF4 80%, transparent)'}}></div>
            {/* Right mask */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to left, #F8FAF4 80%, transparent)'}}></div>
            <div className="w-full group">
              <div className="flex whitespace-nowrap animate-category-scroll group-hover:pause-category-scroll cursor-pointer">
            {[
              "Gift Card",
              "Stationary",
              "Pens",
              "Pencils",
              "Chocolates",
              "Cadbury Dairy Milk",
              "Kit Kat",
                ].map((item, idx) => {
                  const amazonCategoryUrls = {
                    "Gift Card": "https://www.amazon.com/s?k=gift+card",
                    "Stationary": "https://www.amazon.com/s?k=stationary",
                    "Pens": "https://www.amazon.com/s?k=pens",
                    "Pencils": "https://www.amazon.com/s?k=pencils",
                    "Chocolates": "https://www.amazon.com/s?k=chocolates",
                    "Cadbury Dairy Milk": "https://www.amazon.com/s?k=cadbury+dairy+milk",
                    "Kit Kat": "https://www.amazon.com/s?k=kit+kat",
                  };
                  return (
                    <a
                key={idx}
                      href={amazonCategoryUrls[item]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mx-6 text-[#234D20] font-medium text-base opacity-60 hover:opacity-100 transition-opacity duration-200"
                    >
                      {categoryIcons[item]}
                      {item}
                    </a>
                  );
                })}
                {/* Repeat for infinite effect */}
                {[
                  "Gift Card",
                  "Stationary",
                  "Pens",
                  "Pencils",
                  "Chocolates",
                  "Cadbury Dairy Milk",
                  "Kit Kat",
                ].map((item, idx) => {
                  const amazonCategoryUrls = {
                    "Gift Card": "https://www.amazon.com/s?k=gift+card",
                    "Stationary": "https://www.amazon.com/s?k=stationary",
                    "Pens": "https://www.amazon.com/s?k=pens",
                    "Pencils": "https://www.amazon.com/s?k=pencils",
                    "Chocolates": "https://www.amazon.com/s?k=chocolates",
                    "Cadbury Dairy Milk": "https://www.amazon.com/s?k=cadbury+dairy+milk",
                    "Kit Kat": "https://www.amazon.com/s?k=kit+kat",
                  };
                  return (
                    <a
                      key={"repeat-" + idx}
                      href={amazonCategoryUrls[item]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mx-6 text-[#234D20] font-medium text-base opacity-60 hover:opacity-100 transition-opacity duration-200"
              >
                {categoryIcons[item]}
                {item}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
