"use client";

import anime from "animejs";
import { useEffect, useRef } from "react";

interface NeonButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function NeonButton({
  children,
  href,
  onClick,
  variant = "primary",
}: NeonButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ringRef.current) return;

    // Continuous pulsing animation
    anime({
      targets: ringRef.current,
      scale: [1, 1.15],
      opacity: [0.6, 0],
      duration: 2000,
      easing: "easeOutQuad",
      loop: true,
    });
  }, []);

  const handleMouseEnter = () => {
    if (!buttonRef.current) return;

    anime({
      targets: buttonRef.current.querySelector(".button-content"),
      scale: [1, 1.05],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;

    anime({
      targets: buttonRef.current.querySelector(".button-content"),
      scale: [1.05, 1],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const baseClasses = `
    relative inline-flex items-center justify-center
    px-8 py-4 font-display font-semibold text-white
    rounded-full overflow-hidden
    transition-all duration-300
    group
  `;

  const variantClasses =
    variant === "primary"
      ? "bg-transparent border-2 border-electric-blue hover:shadow-neon-lg"
      : "bg-electric-blue/10 border-2 border-electric-blue/30 hover:border-electric-blue/60";

  const Component = href ? "a" : "button";

  return (
    <Component
      ref={buttonRef as any}
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Pulsing neon ring effect */}
      <div
        ref={ringRef}
        className="absolute inset-0 border-2 border-electric-blue rounded-full"
        style={{ willChange: "transform, opacity" }}
      />

      {/* Background glow */}
      <div className="absolute inset-0 bg-electric-blue/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/0 via-electric-blue/20 to-electric-blue/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

      {/* Button content */}
      <span className="button-content relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
}
