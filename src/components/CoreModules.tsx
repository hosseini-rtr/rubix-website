"use client";

import anime from "animejs";
import { RefreshCw, Sparkles, Target } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface ModuleCardProps {
  title: string;
  titleEn: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  href: string;
}

function ModuleCard({
  title,
  titleEn,
  description,
  icon,
  delay = 0,
  href,
}: ModuleCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target,
              opacity: [0, 1],
              translateY: [40, 0],
              delay,
              duration: 800,
              easing: "easeOutExpo",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <Link
      href={href}
      ref={cardRef}
      className="group relative p-8 opacity-0 block overflow-hidden rounded-3xl hover:border-electric-blue/50 transition-all duration-500 hover:shadow-neon-lg"
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

      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon with liquid glass effect */}
        <div
          className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative"
          style={{
            background:
              "linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(0, 255, 255, 0.1))",
            backdropFilter: "blur(10px)",
            boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.2)",
            border: "1px solid rgba(0, 212, 255, 0.2)",
          }}
        >
          <div className="text-electric-blue group-hover:text-neon-cyan transition-colors duration-300">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3
          className="font-persian text-2xl font-semibold mb-2 text-white group-hover:text-glow transition-colors duration-300"
          dir="rtl"
        >
          {title}
        </h3>
        <p className="font-display text-sm text-electric-blue/70 mb-4">
          {titleEn}
        </p>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed font-persian" dir="rtl">
          {description}
        </p>

        {/* Hover effect line with glass */}
        <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-electric-blue to-neon-cyan group-hover:w-full transition-all duration-500 rounded-full" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
    </Link>
  );
}

export default function CoreModules() {
  const modules = [
    {
      icon: <Target size={32} strokeWidth={1.5} />,
      title: "روبیکس اولین چرخش",
      titleEn: "Rubix First Turn",
      description:
        "کشف نیاز، تحلیل تکنیکال، و نقشه‌راه دقیق پروژه شما در اولین قدم.",
      href: "/services#first-turn",
    },
    {
      icon: <RefreshCw size={32} strokeWidth={1.5} />,
      title: "روبیکس حلقه",
      titleEn: "Rubix Loop",
      description: "توسعه ماژولار و پیوسته با پشتیبانی مستمر و بهبود سیستم.",
      href: "/services#loop",
    },
    {
      icon: <Sparkles size={32} strokeWidth={1.5} />,
      title: "ابزارهای هوش مصنوعی روبیکس",
      titleEn: "Rubix AI Tools",
      description:
        "افزودنی‌های هوشمند برای بهینه‌سازی و خودکارسازی سیستم‌های شما.",
      href: "/services#ai-tools",
    },
  ];

  return (
    <section className="section-container" data-section="core-modules">
      {/* Section Header with glass morphism */}
      <div className="text-center mb-20">
        <div className="inline-block relative">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Core <span className="text-glow">Modules</span>
          </h2>
          {/* Decorative glass element */}
          <div className="absolute -inset-4 bg-gradient-to-r from-electric-blue/5 to-neon-cyan/5 blur-2xl -z-10 rounded-full" />
        </div>
        <p className="text-lg text-gray-400 font-persian mt-2" dir="rtl">
          سه رکن اصلی سیستم روبیکس
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {modules.map((module, index) => (
          <ModuleCard key={module.titleEn} {...module} delay={index * 100} />
        ))}
      </div>
    </section>
  );
}
