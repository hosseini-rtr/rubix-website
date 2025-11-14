"use client";

// CTACinematic: High-impact call-to-action section
// - Particle-powered background with canvas animation
// - Neon pulse button with 3D tilt on hover
// - Micro-grid pattern overlay
// - Precision-engineered for conversion

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Minimal particle system: floating dots with trails
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    // Create sparse particle field
    const particles = Array.from({ length: 25 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    let frameId: number;
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "rgba(10, 10, 10, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius * 4
        );
        gradient.addColorStop(0, `rgba(0, 212, 255, ${p.opacity})`);
        gradient.addColorStop(1, "rgba(0, 212, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", setSize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden
    />
  );
}

// Neon CTA button with 3D tilt
function NeonCTAButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-100, 100], [8, -8]);
  const rotateY = useTransform(springX, [-100, 100], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex items-center gap-3 px-10 py-5 rounded-xl overflow-hidden group"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Base layer with gradient */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,160,255,0.08))",
          border: "1px solid rgba(0,212,255,0.25)",
        }}
      />

      {/* Animated glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={
          isHovered
            ? {
                boxShadow: [
                  "0 0 30px rgba(0,212,255,0.3), inset 0 0 30px rgba(0,212,255,0.08)",
                  "0 0 60px rgba(0,212,255,0.5), inset 0 0 50px rgba(0,212,255,0.15)",
                  "0 0 30px rgba(0,212,255,0.3), inset 0 0 30px rgba(0,212,255,0.08)",
                ],
              }
            : {
                boxShadow:
                  "0 0 20px rgba(0,212,255,0.2), inset 0 0 20px rgba(0,212,255,0.05)",
              }
        }
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
      />

      {/* Top reflection */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-1/2 rounded-t-xl pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <span className="relative z-10 font-display font-semibold text-lg text-white tracking-tight">
        {children}
      </span>
      <ArrowRight className="relative z-10 w-5 h-5 text-electric-blue group-hover:translate-x-1 transition-transform duration-300" />
    </motion.a>
  );
}

export default function CTACinematic() {
  return (
    <section className="relative py-32 bg-deep-black overflow-hidden">
      {/* Particle canvas background */}
      <ParticleCanvas />

      {/* Micro-grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.05), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Eyebrow with icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] as const }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
          style={{
            background: "rgba(0,212,255,0.05)",
            border: "1px solid rgba(0,212,255,0.1)",
          }}
        >
          <Zap className="w-4 h-4 text-electric-blue" />
          <span className="text-sm font-medium text-gray-300">
            Ready to Build
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.19, 1, 0.22, 1] as const,
          }}
          className="font-display font-bold text-4xl md:text-6xl mb-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(0,212,255,0.9) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Let's Build Something Intelligent
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.19, 1, 0.22, 1] as const,
          }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Transform your ideas into production-ready systems. Start with a
          conversation.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.19, 1, 0.22, 1] as const,
          }}
        >
          <NeonCTAButton href="/contact">Start Your Project</NeonCTAButton>
        </motion.div>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-500"
        >
          <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
          <span>No long-term contracts. Cancel anytime.</span>
        </motion.div>
      </div>
    </section>
  );
}
