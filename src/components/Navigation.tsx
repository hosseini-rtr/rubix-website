"use client";

import anime from "animejs";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false });

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const underlineRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavHover = (
    index: number,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const target = event.currentTarget;
    const parent = target.parentElement;

    if (underlineRef.current && parent) {
      anime({
        targets: underlineRef.current,
        left: target.offsetLeft,
        width: target.offsetWidth,
        duration: 400,
        easing: "easeOutCubic",
      });
    }
  };

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-matte-black/80 backdrop-blur-lg border-b border-light-gray/20 shadow-depth"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo variant="default" animated={true} />

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="relative flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-5 py-2 font-display text-sm font-medium transition-colors duration-300 ${
                    activeIndex === index
                      ? "text-electric-blue"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onMouseEnter={(e) => handleNavHover(index, e)}
                  onClick={() => handleNavClick(index)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Animated underline */}
              <div
                ref={underlineRef}
                className="absolute bottom-0 h-0.5 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-full transition-all duration-400"
                style={{
                  left: 0,
                  width: navItems[0] ? 50 : 0,
                }}
              />
            </div>
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-block px-6 py-2.5 font-display text-sm font-semibold text-white bg-transparent border border-electric-blue/50 rounded-full hover:bg-electric-blue/10 hover:border-electric-blue hover:shadow-neon transition-all duration-300"
            >
              Book First Turn
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-300 hover:text-white transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
