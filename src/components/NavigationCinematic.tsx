"use client";

// NavigationCinematic: Precision navigation bar
// - Advanced backdrop blur with scroll-reactive opacity
// - Neon indicator line with smooth tracking
// - Micro-interactions on hover
// - Apple Pro aesthetic: minimal, intelligent, precise

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false });

export default function NavigationCinematic() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95]);
  const navBlur = useTransform(scrollY, [0, 100], [8, 20]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  // Update active index based on pathname
  useEffect(() => {
    const index = navItems.findIndex((item) => item.href === pathname);
    if (index !== -1) setActiveIndex(index);
  }, [pathname]);

  // Update indicator position
  const updateIndicator = (index: number, element?: HTMLElement) => {
    const target = element || navRef.current?.querySelectorAll("a")[index];
    if (target) {
      setIndicatorStyle({
        left: target.offsetLeft,
        width: target.offsetWidth,
      });
    }
  };

  useEffect(() => {
    updateIndicator(activeIndex);
  }, [activeIndex]);

  return (
    <motion.nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: useTransform(
          navOpacity,
          (o) => `rgba(10, 10, 10, ${o})`
        ),
        backdropFilter: useTransform(
          navBlur,
          (b) => `blur(${b}px) saturate(150%)`
        ),
      }}
    >
      {/* Top neon accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,212,255,0.2) 50%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo variant="default" animated={true} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative flex items-center gap-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-5 py-2 font-display text-sm font-medium transition-colors duration-300 ${
                    activeIndex === index
                      ? "text-electric-blue"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onMouseEnter={(e) => updateIndicator(index, e.currentTarget)}
                  onMouseLeave={() => updateIndicator(activeIndex)}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Animated indicator */}
              <motion.div
                className="absolute bottom-0 h-0.5 rounded-full"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  background:
                    "linear-gradient(90deg, rgba(0,212,255,0.6), rgba(0,160,255,0.8), rgba(0,212,255,0.6))",
                  boxShadow: "0 0 12px rgba(0,212,255,0.8)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            whileTap={{ scale: 0.95 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Bottom subtle shadow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,212,255,0.06) 50%, transparent)",
          boxShadow: "0 1px 3px rgba(0,212,255,0.05)",
        }}
      />
    </motion.nav>
  );
}
