import React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/magic/MagneticButton";

const features = [
  {
    title: "Gain Tracker",
    description:
      "Track every rep, every set, every gain. Monitor your progress with detailed analytics and watch yourself grow stronger.",
    icon: "📊",
    color: "from-neon-cyan to-blue-400",
  },
  {
    title: "Focus Mode",
    description:
      "Lock in during your workout. Track distractions and stay motivated with our anti-scroll counter.",
    icon: "⚡",
    color: "from-neon-magenta to-purple-400",
  },
  {
    title: "Fight Club",
    description:
      "Compete with gym bros worldwide. Leaderboards, challenges, and community support to push you harder.",
    icon: "🏆",
    color: "from-yellow-400 to-orange-400",
  },
];

export const FeatureTrio = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container-custom z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-black text-center mb-4 neon-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}
        >
          THE SYSTEM CODE
        </motion.h2>

        <motion.p
          className="text-center text-slate-400 mb-16 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          // transition={{ duration: 0.8, delay: 0.1 }}
        >
          Three reasons to download ARISE today
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="neon-box-glow p-8 rounded-xl backdrop-blur-custom"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                boxShadow: "0 0 40px rgba(0, 250, 255, 0.6)",
              }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3
                className={`text-2xl font-bold mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
              >
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature mockups placeholder */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          // transition={{ duration: 0.8, delay: 0.6 }}
        ></motion.div>
      </div>
    </section>
  );
};
