import React, { useRef, useEffect } from "react";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { motion } from "framer-motion";

export const SVGBackground = () => {
  const scrollDepth = useScrollDepth();
  const svgRef = useRef<SVGSVGElement>(null);

  // Color interpolation based on scroll
  const getColor = () => {
    const progress = scrollDepth / 100;
    // Cyan to Magenta gradient
    const r = Math.round(0 + progress * 255);
    const g = Math.round(250 - progress * 170);
    const b = Math.round(255 - progress * 175);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const currentColor = getColor();

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 1440 960"
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity: 0.3 }}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00faff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ff0080" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Background grid-like pattern */}
      <g stroke="rgba(0, 250, 255, 0.1)" strokeWidth="1" fill="none">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 120} y1="0" x2={i * 120} y2="960" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 120} x2="1440" y2={i * 120} />
        ))}
      </g>

      {/* Animated SVG paths - Dumbbell shapes */}
      <motion.g
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {/* Dumbbell 1 */}
        <path
          d="M 200,300 Q 250,250 300,300 L 300,400 Q 250,450 200,400 Z"
          stroke={currentColor}
          strokeWidth="2"
          fill="none"
          strokeDasharray="100"
          strokeDashoffset={scrollDepth}
        />

        {/* Dumbbell 2 */}
        <path
          d="M 1100,200 Q 1150,150 1200,200 L 1200,300 Q 1150,350 1100,300 Z"
          stroke={currentColor}
          strokeWidth="2"
          fill="none"
          strokeDasharray="100"
          strokeDashoffset={scrollDepth}
        />

        {/* Connecting lines */}
        <path
          d="M 300,350 Q 720,100 1100,350"
          stroke={currentColor}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="200"
          strokeDashoffset={scrollDepth * 2}
          opacity={0.5}
        />

        {/* Geometric accent circle - morphs with scroll */}
        <motion.circle
          cx="720"
          cy="480"
          r={100 + scrollDepth * 0.5}
          stroke={currentColor}
          strokeWidth="2"
          fill="none"
          opacity={0.3 + scrollDepth * 0.003}
        />
      </motion.g>

      {/* Hexagon patterns that appear on scroll */}
      {Array.from({ length: 5 }).map((_, i) => {
        const delay = i * 0.1;
        const show = scrollDepth > i * 20;
        return (
          <motion.g
            key={`hex-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: show ? 0.2 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <path
              d={generateHexagon(200 + i * 200, 600, 40)}
              stroke={currentColor}
              strokeWidth="1"
              fill="none"
            />
          </motion.g>
        );
      })}
    </svg>
  );
};

// Helper: Generate hexagon path
const generateHexagon = (cx: number, cy: number, radius: number) => {
  const points = Array.from({ length: 6 }).map((_, i) => {
    const angle = (i * Math.PI) / 3 - Math.PI / 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    return `${x},${y}`;
  });
  return `M ${points.join(" L ")} Z`;
};
