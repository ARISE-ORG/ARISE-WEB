import React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/magic/MagneticButton";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container-custom z-10 text-center">
        <motion.h1
          className="text-6xl md:text-7xl font-black mb-6 neon-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          LOCK IN
        </motion.h1>

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          GAIN MORE
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Track your gains. Crush your limits. Join the gym bro community. ARISE
          is your ultimate fitness companion.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
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

        <motion.div
          className="text-sm text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>Coming Soon • Exclusive Launch</p>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute right-10 top-1/4 w-12 h-12 border-2 border-neon-cyan rounded-full opacity-20"
        animate={{ y: [0, 30, 0], rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute left-10 bottom-1/4 w-8 h-8 border-2 border-neon-magenta rounded-full opacity-20"
        animate={{ y: [0, -30, 0], rotate: -360 }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};
