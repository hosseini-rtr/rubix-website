"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Cloud,
  Code2,
  Cpu,
  Database,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const technologies = [
  {
    category: "Frontend",
    icon: Code2,
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "rgba(0, 212, 255, 0.8)",
  },
  {
    category: "Backend",
    icon: Database,
    stack: ["Node.js", "Python", "PostgreSQL", "Redis"],
    color: "rgba(0, 180, 255, 0.8)",
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    stack: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    color: "rgba(0, 150, 255, 0.8)",
  },
  {
    category: "Mobile",
    icon: Smartphone,
    stack: ["React Native", "Flutter", "iOS", "Android"],
    color: "rgba(0, 200, 255, 0.8)",
  },
  {
    category: "AI & ML",
    icon: Bot,
    stack: ["TensorFlow", "PyTorch", "OpenAI", "Langchain"],
    color: "rgba(167, 139, 250, 0.8)",
  },
  {
    category: "Security",
    icon: Shield,
    stack: ["Auth0", "OAuth", "Encryption", "Penetration Testing"],
    color: "rgba(0, 212, 255, 0.8)",
  },
  {
    category: "Performance",
    icon: Zap,
    stack: ["CDN", "Caching", "Load Balancing", "Optimization"],
    color: "rgba(0, 255, 255, 0.8)",
  },
  {
    category: "Infrastructure",
    icon: Cpu,
    stack: ["Serverless", "Microservices", "GraphQL", "REST APIs"],
    color: "rgba(0, 190, 255, 0.8)",
  },
];

export default function TechnologiesSection() {
  return (
    <section className="section-container py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,212,255,0.06)] border border-[rgba(0,212,255,0.1)] mb-6">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "rgba(0,212,255,1)",
                boxShadow: "0 0 10px rgba(0,212,255,0.8)",
              }}
            />
            <span className="text-sm text-electric-blue font-medium">
              Technology Stack
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-display font-bold mb-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(0,212,255,0.9) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Precision Tools
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade technologies engineered for performance, security,
            and scalability
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.category}
                variants={itemVariants}
                className="relative group"
              >
                {/* Particle halo */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-4 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                >
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full blur-2xl"
                    style={{
                      background: `radial-gradient(circle, ${tech.color.replace(
                        "0.8",
                        "0.12"
                      )}, transparent 60%)`,
                    }}
                  />
                </div>

                {/* Glass card */}
                <div
                  className="
                    relative
                    rounded-2xl
                    p-6
                    bg-[rgba(255,255,255,0.02)]
                    backdrop-blur-md
                    border
                    border-[rgba(0,212,255,0.08)]
                    shadow-[0_10px_40px_rgba(2,6,23,0.7)]
                    group-hover:border-[rgba(0,212,255,0.16)]
                    transition-all
                    duration-500
                    h-full
                  "
                >
                  {/* Top reflection */}
                  <div
                    aria-hidden
                    className="absolute -top-4 left-0 right-0 h-12 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 60%)",
                      transform: "skewY(-3deg)",
                      mixBlendMode: "overlay",
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${tech.color.replace(
                        "0.8",
                        "0.14"
                      )}, ${tech.color.replace("0.8", "0.08")})`,
                      border: `1px solid ${tech.color.replace("0.8", "0.12")}`,
                      boxShadow: `0 6px 20px ${tech.color.replace(
                        "0.8",
                        "0.08"
                      )}, inset 0 -4px 8px rgba(0,0,0,0.4)`,
                    }}
                  >
                    <Icon
                      className="text-electric-blue"
                      size={28}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Category */}
                  <h3
                    className="text-xl font-display font-semibold mb-4"
                    style={{
                      background: `linear-gradient(90deg, ${
                        tech.color
                      }, ${tech.color.replace("0.8", "0.9")})`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {tech.category}
                  </h3>

                  {/* Divider */}
                  <div
                    className="h-px w-full mb-4"
                    style={{
                      background: `linear-gradient(90deg, ${tech.color.replace(
                        "0.8",
                        "0.08"
                      )}, transparent 80%)`,
                    }}
                  />

                  {/* Stack list */}
                  <ul className="space-y-2">
                    {tech.stack.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{
                            background: tech.color,
                            boxShadow: `0 0 6px ${tech.color}`,
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <p className="text-sm text-gray-500">
            + Custom integrations and emerging technologies on demand
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
