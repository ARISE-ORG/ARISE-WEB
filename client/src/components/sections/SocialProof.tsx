import React from "react";
import { motion } from "framer-motion";

export const SocialProof = () => {
  const stats = [
    { label: "Downloads", value: "1K+", icon: "📥" },
    { label: "Active Users", value: "500+", icon: "👥" },
    { label: "Avg Rating", value: "4.8★", icon: "⭐" },
    { label: "PRs Logged", value: "50K+", icon: "🔥" },
  ];

  const testimonials = [
    {
      name: "Alex D.",
      role: "Gym Bro",
      message:
        "ARISE changed my workout game. The focus mode keeps me locked in.",
      avatar: "👨‍💻",
    },
    {
      name: "Jordan M.",
      role: "Fitness Coach",
      message:
        "Best app for tracking gains and staying motivated. Highly recommend!",
      avatar: "💪",
    },
    {
      name: "Casey J.",
      role: "Competitive Lifter",
      message:
        "Fight Club leaderboard is insane. Love competing with my gym crew.",
      avatar: "🏋️",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container-custom z-10">
        {/* Stats */}
        <motion.div className="grid md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="neon-box-glow p-8 rounded-lg text-center backdrop-blur-custom"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <p className="text-3xl font-black neon-glow mb-2">{stat.value}</p>
              <p className="text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.h3
          className="text-4xl font-black text-center mb-12 neon-glow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          What Users Say
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="neon-box-glow p-6 rounded-lg backdrop-blur-custom"
              initial={{
                opacity: 0,
                x: index === 1 ? 0 : index === 0 ? -30 : 30,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="text-slate-300 mb-4 italic">
                "{testimonial.message}"
              </p>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{testimonial.avatar}</span>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
