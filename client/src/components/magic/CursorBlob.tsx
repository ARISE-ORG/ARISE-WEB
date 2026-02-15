import React, { useEffect, useRef, useState } from "react";
import { useMouse } from "@/hooks/useMouse";

interface Particle {
  id: number;
  x: number;
  y: number;
  age: number;
  maxAge: number;
}

export const CursorBlob = () => {
  const position = useMouse();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const nextIdRef = useRef(0);
  const [isOverButton, setIsOverButton] = useState(false);

  // Detect if cursor is over a button
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isButton = target.closest('button, [role="button"]');
      setIsOverButton(!!isButton);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Spawn particles on mouse move
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        const particle: Particle = {
          id: nextIdRef.current++,
          x: position.x + (Math.random() - 0.5) * 20,
          y: position.y + (Math.random() - 0.5) * 20,
          age: 0,
          maxAge: 60,
        };
        particlesRef.current.push(particle);

        // Keep max 50 particles
        if (particlesRef.current.length > 50) {
          particlesRef.current.shift();
        }
      }
    }, 16);

    return () => clearInterval(interval);
  }, [position]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animationLoop = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(15, 23, 42, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw blob (cursor position)
      const blobRadius = isOverButton ? 25 : 15;
      const gradient = ctx.createRadialGradient(
        position.x,
        position.y,
        0,
        position.x,
        position.y,
        blobRadius,
      );
      gradient.addColorStop(0, "rgba(0, 250, 255, 0.8)");
      gradient.addColorStop(1, "rgba(0, 250, 255, 0.2)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(position.x, position.y, blobRadius, 0, Math.PI * 2);
      ctx.fill();

      // Add glow effect
      ctx.strokeStyle = "rgba(0, 250, 255, 0.5)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw and update particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.age++;
        const progress = particle.age / particle.maxAge;
        const opacity = 1 - progress;
        const size = 2 * (1 - progress);

        ctx.fillStyle = `rgba(0, 250, 255, ${opacity * 0.6})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, Math.max(1, size), 0, Math.PI * 2);
        ctx.fill();

        return particle.age < particle.maxAge;
      });

      requestAnimationFrame(animationLoop);
    };

    animationLoop();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [position, isOverButton]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ background: "transparent" }}
    />
  );
};
