"use client";

// HeroCinematic: Precision-engineered hero section
// - Particle field background (computational aesthetic)
// - Glowing title reveal with character-by-character stagger
// - Neon pulse CTA with reactive micro-interactions
// - Apple Pro meets Blade Runner: matte surfaces, sharp neon accents, no decoration

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Particle system: low-cost canvas with floating micro-dots
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    // Particle pool: minimal, sparse field
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      radius: Math.random() * 1.2 + 0.3,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    let frameId: number;
    const animate = () => {
      if (!ctx || !canvas) return;

      // Slow fade trail for motion blur effect
      ctx.fillStyle = "rgba(10, 10, 10, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle: cyan dot with soft glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius * 3
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

// Glowing title with character stagger
function GlowingTitle({ children }: { children: string }) {
  const chars = children.split("");

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2,
      },
    },
  };

  const charVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.19, 1, 0.22, 1] as const, // easeOutExpo
      },
    },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight"
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={charVariants}
          className="inline-block"
          style={{
            // Gradient text with neon edge
            background:
              "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(0,212,255,0.95) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 40px rgba(0, 212, 255, 0.3)",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

// Neon pulse button with reactive glow
function NeonPulseCTA({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
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

  const Tag = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Tag
      {...props}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex items-center gap-3 px-8 py-4 rounded-lg overflow-hidden group"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated background layer */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(0,160,255,0.06))",
          border: "1px solid rgba(0,212,255,0.2)",
        }}
        animate={
          isHovered
            ? {
                boxShadow: [
                  "0 0 20px rgba(0,212,255,0.2), inset 0 0 20px rgba(0,212,255,0.05)",
                  "0 0 40px rgba(0,212,255,0.4), inset 0 0 30px rgba(0,212,255,0.1)",
                  "0 0 20px rgba(0,212,255,0.2), inset 0 0 20px rgba(0,212,255,0.05)",
                ],
              }
            : {}
        }
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Neon edge pulse */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow:
            "0 0 30px rgba(0,212,255,0.6), inset 0 0 20px rgba(0,212,255,0.1)",
        }}
      />

      {/* Content */}
      <span className="relative z-10 font-display font-semibold text-white tracking-tight">
        {children}
      </span>
      <ArrowRight className="relative z-10 w-5 h-5 text-electric-blue group-hover:translate-x-1 transition-transform duration-300" />
    </Tag>
  );
}

export default function HeroCinematic() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-black">
      {/* Particle field background */}
      <ParticleField />

      {/* Radial gradient overlay (subtle depth) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(0,212,255,0.03), transparent 50%)",
        }}
      />

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-32 text-center">
        {/* Eyebrow text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full"
          style={{
            background: "rgba(0,212,255,0.04)",
            border: "1px solid rgba(0,212,255,0.08)",
            boxShadow: "0 4px 12px rgba(0,212,255,0.06)",
          }}
        >
          <Zap className="w-4 h-4 text-electric-blue" />
          <span className="text-sm font-medium text-gray-300 tracking-wide">
            Advanced Software Systems
          </span>
        </motion.div>

        {/* Main title with glowing reveal */}
        <GlowingTitle>Systems That Evolve</GlowingTitle>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          We build intelligent systems that learn, adapt, and scale.
          <br />
          Precision-engineered for the future.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <NeonPulseCTA href="/services">Explore Services</NeonPulseCTA>

          {/* Secondary ghost button */}
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-gray-700/50 text-gray-300 font-display font-medium hover:border-electric-blue/30 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start a Project
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-gray-700/50 flex items-start justify-center p-2"
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-electric-blue"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
