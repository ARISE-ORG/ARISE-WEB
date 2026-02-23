import React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/magic/MagneticButton";

export const FinalCTA = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container-custom z-10 text-center max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-black mb-6 neon-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}
        >
          Ready to LOCK IN?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-slate-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, delay: 0.1 }}
        >
          Join thousands of gym bros tracking their gains, crushing their
          limits, and competing in Fight Club. Download ARISE today.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MagneticButton variant="primary" className="text-lg" disabled>
            Download on Google Play (Stay Tuned)
          </MagneticButton>
          <MagneticButton variant="secondary" className="text-lg" disabled>
            Download on App Store (Stay Tuned)
          </MagneticButton>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, delay: 0.25 }}
        >
          <MagneticButton
            variant="primary"
            className="text-lg"
            onClick={() =>
              window.open(
                "https://expo.dev/artifacts/eas/6UF5CPo4dAMRAArYMFHZQQ.apk",
                "_blank",
              )
            }
          >
            Android Beta
          </MagneticButton>
          <MagneticButton variant="secondary" className="text-lg" disabled>
            iOS Beta (Stay Tuned)
          </MagneticButton>
        </motion.div>

        <motion.p
          className="text-slate-500 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          // transition={{ duration: 0.8, delay: 0.3 }}
        >
          Free • No ads • Private gains
        </motion.p>
      </div>
    </section>
  );
};
