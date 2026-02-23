import React, { useRef, useEffect, useState } from "react";
import { useMouse } from "@/hooks/useMouse";
import gsap from "gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  disabled = false,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const position = useMouse();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button || !isHovering) return;

    // Calculate distance from button center to cursor
    const rect = button.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(position.x - buttonCenterX, 2) +
        Math.pow(position.y - buttonCenterY, 2),
    );

    const maxDistance = 150; // pixels
    const attractForce = Math.max(0, 1 - distance / maxDistance);

    // Calculate displacement
    const angle = Math.atan2(
      position.y - buttonCenterY,
      position.x - buttonCenterX,
    );
    const displacement = attractForce * 30; // max 30px displacement

    const targetX = Math.cos(angle) * displacement;
    const targetY = Math.sin(angle) * displacement;

    gsap.to(button, {
      x: targetX,
      y: targetY,
      duration: 0.3,
      ease: "power2.out",
    });

    return () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)",
      });
    };
  }, [position, isHovering]);

  const handleMouseEnter = () => {
    if (disabled) return;
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    if (disabled) return;
    setIsHovering(false);
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "elastic.out(1, 0.5)",
    });
  };

  const baseStyles =
    "px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 relative overflow-hidden";

  const variantStyles =
    variant === "primary"
      ? "bg-neon-cyan text-black hover:shadow-neon-cyan"
      : "border-2 border-neon-cyan text-neon-cyan hover:shadow-neon-cyan";

  const disabledStyles = disabled
    ? "opacity-60 cursor-not-allowed pointer-events-none"
    : "";

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};
