import React, { useState, useEffect } from "react";
import { Container } from "@/components/layout";
import { motion } from "framer-motion";

import { MagneticButton } from "@/components/magic/MagneticButton";

export const AppShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = [
    {
      id: 1,
      src: "/assets/images/screenshot1.jpeg",
      alt: "Fight Club - Challenge your friends",
      title: "Fight Club",
      description: "Challenge your friends and prove your strength",
    },
    {
      id: 2,
      src: "/assets/images/screenshot2.jpeg",
      alt: "Track your gains",
      title: "Gains Tracker",
      description: "Monitor your progress and celebrate victories",
    },
    {
      id: 3,
      src: "/assets/images/screenshot3.jpeg",
      alt: "Dashboard overview",
      title: "Dashboard",
      description: "All your stats in one powerful view",
    },
    {
      id: 4,
      src: "/assets/images/screenshot4.jpeg",
      alt: "Social features",
      title: "Connect",
      description: "Build your fitness community",
    },
    {
      id: 5,
      src: "/assets/images/screenshot5.jpeg",
      alt: "Profile and stats",
      title: "Your Profile",
      description: "Track your journey and achievements",
    },
  ];

  // Auto-rotate screenshots every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [screenshots.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative py-24 md:py-4 overflow-hidden">
      <Container>
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Ready to{" "}
                <a
                  href="https://www.google.com/"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                >
                  ARISE{" "}
                </a>
                ?
              </h2>
              <p className="text-lg md:text-xl text-slate-400 mb-8">
                Track your gains. Crush your limits. Join the gym bro community.
                ARISE is your ultimate fitness companion.
              </p>
            </div>

            {/* Current Feature Details */}
            {/* <div className="space-y-4 min-h-[120px]">
              <h3 className="text-2xl md:text-3xl font-bold text-white transition-all duration-500">
                {screenshots[currentIndex].title}
              </h3>
              <p className="text-slate-400 text-lg transition-all duration-500">
                {screenshots[currentIndex].description}
              </p>
            </div> */}

            {/* Dot Indicators */}
            <div className="flex justify-center lg:justify-start gap-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-2 bg-gradient-to-r from-cyan-400 to-blue-500"
                      : "w-2 h-2 bg-slate-700 hover:bg-slate-600"
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-left mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <MagneticButton
                variant="primary"
                onClick={() =>
                  window.open("https://play.google.com/store", "_blank")
                }
              >
                Google Play
              </MagneticButton>
              <MagneticButton
                variant="secondary"
                onClick={() => window.open("https://apps.apple.com", "_blank")}
              >
                App Store
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Side - 3D Phone Carousel */}
          <div className="relative perspective-1000">
            {/* Phone Mockup Container */}
            <div className="relative mx-auto" style={{ perspective: "2000px" }}>
              {/* Phone Frame */}
              <div className="relative w-[340px] h-[680px] mx-auto bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-cyan-500/20 border-8 border-slate-800">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-10" />

                {/* Screen */}
                <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Screenshots Stack */}
                  <div className="relative w-full h-full">
                    {screenshots.map((screenshot, index) => {
                      const offset = index - currentIndex;
                      const isActive = index === currentIndex;

                      return (
                        <div
                          key={screenshot.id}
                          className="absolute inset-0 transition-all duration-700 ease-out"
                          style={{
                            transform: `
                            translateX(${offset * 100}%)
                            scale(${isActive ? 1 : 0.9})
                            rotateY(${offset * -15}deg)
                          `,
                            opacity: isActive ? 1 : 0.3,
                            zIndex: isActive ? 10 : 5 - Math.abs(offset),
                            filter: isActive ? "none" : "blur(2px)",
                          }}
                        >
                          <img
                            src={screenshot.src}
                            alt={screenshot.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-[3rem] shadow-[0_0_60px_rgba(6,182,212,0.3)] pointer-events-none" />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
                aria-label="Previous screenshot"
              >
                <svg
                  className="w-6 h-6 group-hover:text-cyan-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2  w-12 h-12 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
                aria-label="Next screenshot"
              >
                <svg
                  className="w-6 h-6 group-hover:text-cyan-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
