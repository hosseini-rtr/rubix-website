"use client";

import anime from "animejs";
import { useEffect, useRef } from "react";
import NeonButton from "./NeonButton";

export default function CTABlock() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target.querySelectorAll(".cta-item"),
              opacity: [0, 1],
              scale: [0.95, 1],
              delay: anime.stagger(150),
              duration: 800,
              easing: "easeOutExpo",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-container text-center"
      data-section="cta"
    >
      <div className="max-w-4xl mx-auto relative">
        {/* Liquid glass container */}
        <div
          className="relative p-12 md:p-16 rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
            backdropFilter: "blur(20px) saturate(180%)",
            boxShadow:
              "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 0 rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {/* Liquid glass highlight */}
          <div
            className="absolute top-0 left-0 right-0 h-[40%] opacity-50 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.15), transparent)",
              borderRadius: "inherit",
            }}
          />

          {/* Decorative glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-neon-cyan/10 opacity-50" />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <h2
              className="cta-item opacity-0 font-persian text-4xl md:text-6xl font-bold mb-6"
              dir="rtl"
            >
              آماده‌اید سیستم خود را <span className="text-glow">متحول</span>{" "}
              کنید؟
            </h2>

            <p
              className="cta-item opacity-0 font-persian text-lg md:text-xl text-gray-400 mb-12 leading-relaxed"
              dir="rtl"
            >
              در اولین چرخش، نقشه‌راه دقیق پروژه شما ترسیم می‌شود.
            </p>

            <div className="cta-item opacity-0">
              <NeonButton href="/contact">
                <span className="font-persian">رزرو اولین جلسه</span>
              </NeonButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
