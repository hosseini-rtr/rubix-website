"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const team = [
  {
    name: "Alex Chen",
    role: "Technical Architect",
    specialty: "System Design & Scalability",
    avatar: "AC",
    color: "rgba(0, 212, 255, 0.8)",
  },
  {
    name: "Sarah Rodriguez",
    role: "AI Engineer",
    specialty: "Machine Learning & NLP",
    avatar: "SR",
    color: "rgba(167, 139, 250, 0.8)",
  },
  {
    name: "Michael Zhang",
    role: "Full-Stack Lead",
    specialty: "React & Node.js Expert",
    avatar: "MZ",
    color: "rgba(0, 180, 255, 0.8)",
  },
  {
    name: "Priya Patel",
    role: "DevOps Engineer",
    specialty: "Cloud Infrastructure & CI/CD",
    avatar: "PP",
    color: "rgba(0, 255, 200, 0.8)",
  },
];

export default function TeamSection() {
  return (
    <section className="section-container py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
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
              Core Team
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
            Engineering Team
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Senior engineers with proven track records in enterprise systems and
            cutting-edge technology
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="relative group"
            >
              {/* Particle halo */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              >
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full blur-3xl"
                  style={{
                    background: `radial-gradient(circle, ${member.color.replace(
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
                  flex
                  flex-col
                  items-center
                  text-center
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

                {/* Avatar */}
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-4 text-3xl font-display font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${member.color.replace(
                      "0.8",
                      "0.14"
                    )}, ${member.color.replace("0.8", "0.08")})`,
                    border: `2px solid ${member.color.replace("0.8", "0.2")}`,
                    boxShadow: `0 8px 24px ${member.color.replace(
                      "0.8",
                      "0.12"
                    )}, inset 0 -6px 12px rgba(0,0,0,0.4)`,
                    color: member.color,
                  }}
                >
                  {member.avatar}
                </div>

                {/* Name */}
                <h3
                  className="text-xl font-display font-semibold mb-1"
                  style={{
                    background: `linear-gradient(90deg, ${member.color}, ${member.color.replace(
                      "0.8",
                      "0.9"
                    )})`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-gray-400 mb-2">{member.role}</p>

                {/* Specialty */}
                <p className="text-xs text-gray-500 mb-6">{member.specialty}</p>

                {/* Divider */}
                <div
                  className="h-px w-full mb-4"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${member.color.replace(
                      "0.8",
                      "0.1"
                    )}, transparent)`,
                  }}
                />

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      background: `rgba(0,212,255,0.06)`,
                      border: "1px solid rgba(0,212,255,0.1)",
                    }}
                    aria-label="GitHub"
                  >
                    <Github size={16} className="text-gray-400" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      background: `rgba(0,212,255,0.06)`,
                      border: "1px solid rgba(0,212,255,0.1)",
                    }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} className="text-gray-400" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      background: `rgba(0,212,255,0.06)`,
                      border: "1px solid rgba(0,212,255,0.1)",
                    }}
                    aria-label="Email"
                  >
                    <Mail size={16} className="text-gray-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <p className="text-sm text-gray-500">
            + Extended network of specialists for domain-specific challenges
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
