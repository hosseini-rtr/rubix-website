"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Building2,
  Stethoscope,
  GraduationCap,
  Rocket,
  Wallet,
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

const projectTypes = [
  {
    title: "E-Commerce Platforms",
    icon: ShoppingCart,
    description:
      "High-conversion shopping experiences with advanced payment systems and inventory management",
    features: ["Payment Integration", "Inventory Systems", "Analytics"],
    color: "rgba(0, 212, 255, 0.8)",
  },
  {
    title: "Enterprise SaaS",
    icon: Building2,
    description:
      "Scalable B2B platforms with multi-tenancy, role management, and complex workflows",
    features: ["Multi-tenant Architecture", "Role-based Access", "API Gateway"],
    color: "rgba(0, 180, 255, 0.8)",
  },
  {
    title: "Healthcare Systems",
    icon: Stethoscope,
    description:
      "HIPAA-compliant medical platforms with patient portals and telemedicine capabilities",
    features: ["HIPAA Compliance", "EHR Integration", "Telemedicine"],
    color: "rgba(167, 139, 250, 0.8)",
  },
  {
    title: "EdTech Platforms",
    icon: GraduationCap,
    description:
      "Interactive learning management systems with video streaming and progress tracking",
    features: ["LMS Features", "Video Streaming", "Assessment Tools"],
    color: "rgba(0, 200, 255, 0.8)",
  },
  {
    title: "Startup MVPs",
    icon: Rocket,
    description:
      "Rapid prototyping and validation tools to test market fit before full-scale development",
    features: ["Rapid Development", "User Testing", "Iteration Cycles"],
    color: "rgba(0, 255, 200, 0.8)",
  },
  {
    title: "FinTech Solutions",
    icon: Wallet,
    description:
      "Secure financial platforms with real-time transactions and regulatory compliance",
    features: ["PCI Compliance", "Real-time Processing", "Fraud Detection"],
    color: "rgba(0, 230, 255, 0.8)",
  },
];

export default function ProjectTypesSection() {
  return (
    <section className="section-container py-32 relative">
      {/* Background particle field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute left-1/4 top-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.15), transparent 60%)",
          }}
        />
        <div
          className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.15), transparent 60%)",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,212,255,0.06)] border border-[rgba(0,212,255,0.1)] mb-6">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "rgba(0,212,255,1)",
                boxShadow: "0 0 10px rgba(0,212,255,0.8)",
              }}
            />
            <span className="text-sm text-electric-blue font-medium">
              Project Categories
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
            What We Build
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Specialized systems across industries, each engineered for specific
            domain challenges
          </p>
        </motion.div>

        {/* Project Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectTypes.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
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
                      background: `radial-gradient(circle, ${project.color.replace(
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
                    border-[rgba(0,212,255,0.08)]
                    shadow-[0_10px_40px_rgba(2,6,23,0.7)]
                    group-hover:border-[rgba(0,212,255,0.16)]
                    group-hover:shadow-[0_20px_60px_rgba(0,212,255,0.1)]
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
                      background: `linear-gradient(135deg, ${project.color.replace(
                        "0.8",
                        "0.14"
                      )}, ${project.color.replace("0.8", "0.08")})`,
                      border: `1px solid ${project.color.replace("0.8", "0.12")}`,
                      boxShadow: `0 6px 20px ${project.color.replace(
                        "0.8",
                        "0.08"
                      )}, inset 0 -4px 8px rgba(0,0,0,0.4)`,
                    }}
                  >
                    <Icon
                      className="text-electric-blue"
                      size={32}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-display font-semibold mb-3"
                    style={{
                      background: `linear-gradient(90deg, ${project.color}, ${project.color.replace(
                        "0.8",
                        "0.9"
                      )})`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Divider */}
                  <div
                    className="h-px w-full mb-6"
                    style={{
                      background: `linear-gradient(90deg, ${project.color.replace(
                        "0.8",
                        "0.08"
                      )}, transparent 80%)`,
                    }}
                  />

                  {/* Features */}
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{
                            background: project.color,
                            boxShadow: `0 0 8px ${project.color}`,
                          }}
                        />
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
