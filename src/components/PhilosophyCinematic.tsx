"use client";

// PhilosophyCinematic: Precision quote display
// - Minimal visual structure with neon accents
// - Micro-animations on scroll reveal
// - Decorative quotation marks with glass treatment
// - Cold, engineered aesthetic

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function PhilosophyCinematic() {
  return (
    <section className="relative py-32 bg-deep-black overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial gradient accent */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.02), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] as const }}
          className="relative"
        >
          {/* Glass container */}
          <div
            className="relative rounded-2xl p-12 md:p-16"
            style={{
              background: "rgba(255,255,255,0.015)",
              backdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(0,212,255,0.06)",
              boxShadow:
                "0 10px 40px rgba(2,6,23,0.6), 0 0 0 1px rgba(0,212,255,0.02)",
            }}
          >
            {/* Top micro-reflection */}
            <div
              aria-hidden
              className="absolute -top-6 left-0 right-0 h-24 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 40%, transparent 60%)",
                transform: "skewY(-3deg)",
                mixBlendMode: "overlay",
              }}
            />

            {/* Decorative quote icon (top left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -top-4 -left-4 w-12 h-12 rounded-lg flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(0,160,255,0.06))",
                border: "1px solid rgba(0,212,255,0.15)",
                boxShadow:
                  "0 6px 20px rgba(0,212,255,0.08), inset 0 -2px 6px rgba(0,0,0,0.3)",
              }}
            >
              <Quote className="w-5 h-5 text-electric-blue" />
            </motion.div>

            {/* Quote text */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.19, 1, 0.22, 1] as const,
              }}
              className="relative text-center"
            >
              <p className="font-display text-2xl md:text-4xl font-medium leading-relaxed text-white mb-8">
                Build systems that{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(0,212,255,1), rgba(0,150,255,0.9))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  learn from their environment
                </span>
                , not just execute instructions.
              </p>

              {/* Attribution */}
              <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className="h-px w-16 mb-2"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)",
                  }}
                />
                <cite className="not-italic text-gray-400 text-sm tracking-wide">
                  Core Philosophy
                </cite>
              </motion.footer>
            </motion.blockquote>

            {/* Decorative neon edge glow */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow:
                  "0 0 20px rgba(0,212,255,0.04), inset 0 0 30px rgba(0,212,255,0.015)",
              }}
            />
          </div>

          {/* Ambient particles (decorative) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            aria-hidden
            className="absolute -right-8 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0,212,255,0.08), transparent 60%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
