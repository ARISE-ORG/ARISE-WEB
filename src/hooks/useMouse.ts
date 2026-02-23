import { useEffect, useState, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export const useMouse = () => {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const smoothedRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Smooth damping for organic feel
      smoothedRef.current.x += (x - smoothedRef.current.x) * 0.1;
      smoothedRef.current.y += (y - smoothedRef.current.y) * 0.1;

      const update = () => {
        setPosition({
          x: smoothedRef.current.x,
          y: smoothedRef.current.y,
        });
        animationFrameId = requestAnimationFrame(update);
      };

      animationFrameId = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return position;
};
