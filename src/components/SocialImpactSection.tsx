"use client";

import { motion } from "framer-motion";
import {
  Globe,
  HandHeart,
  Heart,
  Lightbulb,
  Sprout,
  Users,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.19, 1, 0.22, 1] as any,
    },
  },
};

const supportAreas = [
  {
    title: "Non-Profit Organizations",
    icon: Heart,
    description:
      "Discounted rates and pro-bono work for registered non-profits making measurable social impact",
    impact: "20+ non-profits supported",
    color: "rgba(255, 100, 150, 0.8)",
  },
  {
    title: "Community Projects",
    icon: Users,
    description:
      "Free technical consultation and infrastructure support for community-driven initiatives",
    impact: "15+ communities empowered",
    color: "rgba(150, 100, 255, 0.8)",
  },
  {
    title: "Open Source",
    icon: Globe,
    description:
      "Contributing to open-source projects that advance accessibility and education globally",
    impact: "50+ contributions",
    color: "rgba(0, 200, 255, 0.8)",
  },
  {
    title: "Educational Initiatives",
    icon: Lightbulb,
    description:
      "Supporting schools and educational programs with free mentorship and technical resources",
    impact: "500+ students reached",
    color: "rgba(255, 200, 100, 0.8)",
  },
  {
    title: "Healthcare Access",
    icon: HandHeart,
    description:
      "Building tools for underserved communities to improve healthcare accessibility and outcomes",
    impact: "10+ clinics equipped",
    color: "rgba(100, 255, 200, 0.8)",
  },
  {
    title: "Environmental Tech",
    icon: Sprout,
    description:
      "Reduced-cost development for projects focused on sustainability and environmental conservation",
    impact: "5+ climate initiatives",
    color: "rgba(150, 255, 100, 0.8)",
  },
];

export default function SocialImpactSection() {
  return (
    <section className="section-container py-32 relative">
      {/* Background particle field with warmer tones */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute left-1/3 top-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(255,100,150,0.15), transparent 60%)",
          }}
        />
        <div
          className="absolute right-1/3 bottom-1/3 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(150,100,255,0.15), transparent 60%)",
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,100,150,0.06)] border border-[rgba(255,100,150,0.1)] mb-6">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "rgba(255,100,150,1)",
                boxShadow: "0 0 10px rgba(255,100,150,0.8)",
              }}
            />
            <span
              className="text-sm font-medium"
              style={{ color: "rgba(255,100,150,1)" }}
            >
              Social Impact
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-display font-bold mb-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,100,150,0.9) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Teams We Support
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Leveraging technology for social good — discounted and pro-bono
            services for mission-driven organizations
          </p>
        </motion.div>

        {/* Support Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {supportAreas.map((area) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                variants={itemVariants}
                className="relative group"
              >
                {/* Particle halo */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-6 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                >
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full blur-3xl"
                    style={{
                      background: `radial-gradient(circle, ${area.color.replace(
                        "0.8",
                        "0.15"
                      )}, transparent 60%)`,
                    }}
                  />
                </div>

                {/* Glass card */}
                <div
                  className="
                    relative
                    rounded-2xl
                    p-8
                    bg-[rgba(255,255,255,0.02)]
                    backdrop-blur-md
                    border
                    border-[rgba(255,255,255,0.08)]
                    shadow-[0_10px_40px_rgba(2,6,23,0.7)]
                    group-hover:border-[rgba(255,100,150,0.16)]
                    transition-all
                    duration-500
                    h-full
                    flex
                    flex-col
                  "
                >
                  {/* Top reflection */}
                  <div
                    aria-hidden
                    className="absolute -top-6 left-0 right-0 h-16 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 60%)",
                      transform: "skewY(-4deg)",
                      mixBlendMode: "overlay",
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${area.color.replace(
                        "0.8",
                        "0.14"
                      )}, ${area.color.replace("0.8", "0.08")})`,
                      border: `1px solid ${area.color.replace("0.8", "0.12")}`,
                      boxShadow: `0 6px 20px ${area.color.replace(
                        "0.8",
                        "0.08"
                      )}, inset 0 -4px 8px rgba(0,0,0,0.4)`,
                    }}
                  >
                    <Icon
                      style={{ color: area.color }}
                      size={32}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-display font-semibold mb-3"
                    style={{
                      background: `linear-gradient(90deg, ${
                        area.color
                      }, ${area.color.replace("0.8", "0.9")})`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                    {area.description}
                  </p>

                  {/* Divider */}
                  <div
                    className="h-px w-full mb-4"
                    style={{
                      background: `linear-gradient(90deg, ${area.color.replace(
                        "0.8",
                        "0.08"
                      )}, transparent 80%)`,
                    }}
                  />

                  {/* Impact stat */}
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: area.color,
                        boxShadow: `0 0 8px ${area.color}`,
                      }}
                    />
                    <span className="text-sm text-gray-400">{area.impact}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call-to-action */}
        <motion.div
          variants={itemVariants}
          className="relative group max-w-3xl mx-auto"
        >
          {/* Particle halo */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-12 -z-10 opacity-60"
          >
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,100,150,0.15), transparent 60%)",
              }}
            />
          </div>

          {/* CTA Card */}
          <div
            className="
              relative
              rounded-2xl
              p-10
              text-center
              bg-[rgba(255,255,255,0.02)]
              backdrop-blur-md
              border
              border-[rgba(255,100,150,0.12)]
              shadow-[0_20px_60px_rgba(255,100,150,0.1)]
            "
          >
            <h3 className="text-2xl font-display font-bold mb-4 text-white">
              Need Support for Your Mission?
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              If you're working on a project that creates positive social
              impact, we'd love to hear from you. Let's discuss how we can help.
            </p>
            <a
              href="/contact"
              className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-lg
                font-medium
                transition-all
                duration-300
                hover:scale-105
              "
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,100,150,0.12), rgba(150,100,255,0.08))",
                border: "1px solid rgba(255,100,150,0.2)",
                boxShadow:
                  "0 10px 30px rgba(255,100,150,0.15), inset 0 -6px 20px rgba(0,0,0,0.3)",
                color: "rgba(255,100,150,1)",
              }}
            >
              <Heart size={20} strokeWidth={2} />
              <span>Apply for Support</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
