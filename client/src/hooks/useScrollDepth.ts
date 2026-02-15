import { useEffect, useState, useRef } from "react";

export const useScrollDepth = () => {
  const [scrollDepth, setScrollDepth] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;

        const totalScroll = documentHeight - windowHeight;
        const scrollPercent =
          totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;

        setScrollDepth(Math.min(scrollPercent, 100));
      }, 16); // ~60fps
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return scrollDepth;
};
