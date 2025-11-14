"use client";

// CortexGrid: Precision-engineered service module grid
// - Three micro-dashboard cards with neon accents
// - Staggered entrance with Framer Motion
// - Hover-reactive 3D tilt and glow effects
// - Minimal content hierarchy: icon + metric + description

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { RefreshCw, Sparkles, Target } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface CortexCardProps {
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  delay?: number;
}

function CortexCard({
  title,
  metric,
  metricLabel,
  description,
  icon,
  href,
  delay = 0,
}: CortexCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-100, 100], [4, -4]);
  const rotateY = useTransform(springX, [-100, 100], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.19, 1, 0.22, 1], // easeOutExpo
      }}
    >
      <Link
        href={href}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="block group"
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
          className="relative rounded-2xl p-8 overflow-hidden"
        >
          {/* Base glass layer */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.02)",
              backdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(0,212,255,0.06)",
              boxShadow:
                "0 10px 30px rgba(2,6,23,0.65), 0 0 0 1px rgba(0,212,255,0.03)",
            }}
          />

          {/* Top micro-reflection */}
          <div
            aria-hidden
            className="absolute -top-6 left-0 right-0 h-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 60%)",
              transform: "skewY(-4deg)",
              mixBlendMode: "overlay",
            }}
          />

          {/* Neon edge glow (reactive on hover) */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            animate={
              isHovered
                ? {
                    boxShadow: [
                      "0 0 20px rgba(0,212,255,0.2), inset 0 0 20px rgba(0,212,255,0.05)",
                      "0 0 40px rgba(0,212,255,0.4), inset 0 0 30px rgba(0,212,255,0.1)",
                      "0 0 20px rgba(0,212,255,0.2), inset 0 0 20px rgba(0,212,255,0.05)",
                    ],
                  }
                : {
                    boxShadow:
                      "0 0 20px rgba(0,212,255,0.06), inset 0 0 28px rgba(0,212,255,0.02)",
                  }
            }
            transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Icon chip */}
            <div
              className="inline-flex items-center justify-center mb-6 rounded-lg"
              style={{
                width: 56,
                height: 56,
                background:
                  "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(0,160,255,0.06))",
                border: "1px solid rgba(0,212,255,0.12)",
                boxShadow:
                  "0 6px 20px rgba(0,212,255,0.06), inset 0 -2px 6px rgba(0,0,0,0.35)",
              }}
            >
              <div className="text-electric-blue">{icon}</div>
            </div>

            {/* Title */}
            <h3
              className="font-display font-semibold text-xl mb-2"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,212,255,1), rgba(0,150,255,0.9))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {title}
            </h3>

            {/* Metric display */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-mono text-white tracking-tight">
                {metric}
              </span>
              <span className="text-sm text-gray-400">{metricLabel}</span>
            </div>

            {/* Divider */}
            <div
              className="h-px w-full mb-4"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,212,255,0.08), rgba(0,212,255,0) 60%)",
              }}
            />

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed">
              {description}
            </p>

            {/* Hover indicator */}
            <motion.div
              className="mt-6 flex items-center gap-2 text-electric-blue text-sm font-medium"
              animate={isHovered ? { x: 4 } : { x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span>Explore</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 3L11 8L6 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function CortexGrid() {
  const modules = [
    {
      title: "First Turn",
      metric: "0-1",
      metricLabel: "phase",
      description:
        "Transform ideas into working systems. Rapid prototyping with production-grade architecture from day one.",
      icon: <Target className="w-6 h-6" />,
      href: "/services#first-turn",
    },
    {
      title: "The Loop",
      metric: "∞",
      metricLabel: "iterations",
      description:
        "Continuous evolution through data-driven refinement. Systems that learn and adapt with every cycle.",
      icon: <RefreshCw className="w-6 h-6" />,
      href: "/services#loop",
    },
    {
      title: "AI Tools",
      metric: "10x",
      metricLabel: "velocity",
      description:
        "Custom AI solutions that amplify your team's capabilities. From automation to intelligent decision systems.",
      icon: <Sparkles className="w-6 h-6" />,
      href: "/services#ai-tools",
    },
  ];

  return (
    <section className="relative py-32 bg-deep-black overflow-hidden">
      {/* Background particle field */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(0,212,255,0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(0,212,255,0.04), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] as const }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Core Modules
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three precision-engineered services. One unified system.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <CortexCard key={module.title} {...module} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
