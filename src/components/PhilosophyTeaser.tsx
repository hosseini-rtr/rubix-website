"use client";

import anime from "animejs";
import { useEffect, useRef } from "react";

export default function PhilosophyTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target.querySelectorAll(".philosophy-item"),
              opacity: [0, 1],
              translateY: [30, 0],
              delay: anime.stagger(200),
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
      className="section-container bg-gradient-to-b from-matte-black to-deep-black"
      data-section="philosophy"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="philosophy-item opacity-0 mb-12">
          <div
            className="relative inline-block p-8 md:p-12 rounded-3xl overflow-hidden"
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

            {/* Decorative quotes with glass effect */}
            <div className="absolute top-4 left-4 text-5xl text-electric-blue/20 font-serif">
              "
            </div>
            <div className="absolute bottom-4 right-4 text-5xl text-electric-blue/20 font-serif">
              "
            </div>

            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
                backgroundSize: "25px 25px",
              }}
            />

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-neon-cyan/5" />

            <div className="relative z-10">
              <p
                className="font-persian text-2xl md:text-3xl leading-relaxed text-gray-200 mb-4"
                dir="rtl"
              >
                کیفیت پایدار، از صداقت در تصمیم‌گیری آغاز می‌شود.
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-electric-blue to-neon-cyan mx-auto rounded-full" />
            </div>
          </div>
        </div>

        <div className="philosophy-item opacity-0">
          <p
            className="text-lg text-gray-400 leading-relaxed font-persian"
            dir="rtl"
          >
            در روبیکس، ما باور داریم که تکنولوژی باید به‌گونه‌ای طراحی شود که با
            رشد کسب‌وکار شما همگام باشد. سیستم‌هایی که نه تنها امروز کار
            می‌کنند، بلکه برای آینده آماده هستند.
          </p>
        </div>
      </div>
    </section>
  );
}
