"use client";

import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.19, 1, 0.22, 1] as any,
    },
  },
};

// Client logos represented as stylized initials
const clients = [
  { name: "TechCorp", initial: "TC", color: "rgba(0, 212, 255, 0.8)" },
  { name: "MediHealth", initial: "MH", color: "rgba(167, 139, 250, 0.8)" },
  { name: "EduLearn", initial: "EL", color: "rgba(0, 180, 255, 0.8)" },
  { name: "FinanceFlow", initial: "FF", color: "rgba(0, 255, 200, 0.8)" },
  { name: "RetailHub", initial: "RH", color: "rgba(0, 200, 255, 0.8)" },
  { name: "DataDrive", initial: "DD", color: "rgba(0, 230, 255, 0.8)" },
  { name: "CloudSync", initial: "CS", color: "rgba(100, 200, 255, 0.8)" },
  { name: "AIVentures", initial: "AV", color: "rgba(150, 150, 250, 0.8)" },
];

const testimonials = [
  {
    quote:
      "Rubix Core transformed our legacy system into a modern, scalable platform. Their precision and attention to detail is unmatched.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
    color: "rgba(0, 212, 255, 0.8)",
  },
  {
    quote:
      "The team's ability to understand complex healthcare requirements and deliver HIPAA-compliant solutions on time was impressive.",
    author: "Dr. Michael Chen",
    role: "CEO, MediHealth",
    color: "rgba(167, 139, 250, 0.8)",
  },
];

export default function ClientsSection() {
  return (
    <section className="section-container py-32 relative overflow-hidden">
      {/* Background particle field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.2), transparent 60%)",
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
              Trusted Partners
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
            Client Success
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Partnering with forward-thinking companies to build systems that
            scale
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div
                key={client.name}
                className="relative group cursor-pointer"
              >
                {/* Particle halo */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-4 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                >
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full blur-2xl"
                    style={{
                      background: `radial-gradient(circle, ${client.color.replace(
                        "0.8",
                        "0.12"
                      )}, transparent 60%)`,
                    }}
                  />
                </div>

                {/* Logo card */}
                <div
                  className="
                    relative
                    aspect-square
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-[rgba(255,255,255,0.02)]
                    backdrop-blur-md
                    border
                    border-[rgba(0,212,255,0.08)]
                    shadow-[0_10px_40px_rgba(2,6,23,0.7)]
                    group-hover:border-[rgba(0,212,255,0.16)]
                    transition-all
                    duration-500
                  "
                >
                  {/* Top reflection */}
                  <div
                    aria-hidden
                    className="absolute -top-3 left-0 right-0 h-8 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 60%)",
                      transform: "skewY(-3deg)",
                      mixBlendMode: "overlay",
                    }}
                  />

                  {/* Logo */}
                  <div
                    className="text-4xl font-display font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${client.color}, ${client.color.replace(
                        "0.8",
                        "0.6"
                      )})`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {client.initial}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              className="relative group"
            >
              {/* Particle halo */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              >
                <div
                  className="absolute left-0 top-0 w-[350px] h-[350px] rounded-full blur-3xl"
                  style={{
                    background: `radial-gradient(circle, ${testimonial.color.replace(
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
                  p-8
                  bg-[rgba(255,255,255,0.02)]
                  backdrop-blur-md
                  border
                  border-[rgba(0,212,255,0.08)]
                  shadow-[0_10px_40px_rgba(2,6,23,0.7)]
                  group-hover:border-[rgba(0,212,255,0.16)]
                  transition-all
                  duration-500
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

                {/* Quote marks */}
                <div
                  className="text-6xl font-serif mb-4 opacity-20"
                  style={{ color: testimonial.color }}
                >
                  "
                </div>

                {/* Quote */}
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>

                {/* Divider */}
                <div
                  className="h-px w-full mb-6"
                  style={{
                    background: `linear-gradient(90deg, ${testimonial.color.replace(
                      "0.8",
                      "0.08"
                    )}, transparent 80%)`,
                  }}
                />

                {/* Author */}
                <div>
                  <p
                    className="font-display font-semibold mb-1"
                    style={{ color: testimonial.color }}
                  >
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
