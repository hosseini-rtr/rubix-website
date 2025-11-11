"use client";

import anime from "animejs";
import { useEffect, useRef } from "react";

export default function HeroNew() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cubesRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Create rotating cubes
    const cubeCount = 12;
    cubesRef.current = Array.from({ length: cubeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 40 + 20,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01,
      opacity: Math.random() * 0.3 + 0.1,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    }));

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      cubesRef.current.forEach((cube) => {
        // Update position
        cube.x += cube.vx;
        cube.y += cube.vy;
        cube.rotation += cube.rotationSpeed;

        // Wrap around edges
        if (cube.x < -50) cube.x = canvas.width + 50;
        if (cube.x > canvas.width + 50) cube.x = -50;
        if (cube.y < -50) cube.y = canvas.height + 50;
        if (cube.y > canvas.height + 50) cube.y = -50;

        // Draw cube wireframe
        ctx.save();
        ctx.translate(cube.x, cube.y);
        ctx.rotate(cube.rotation);

        const s = cube.size / 2;
        ctx.strokeStyle = `rgba(0, 212, 255, ${cube.opacity})`;
        ctx.lineWidth = 1.5;

        // Front face
        ctx.beginPath();
        ctx.moveTo(-s, -s);
        ctx.lineTo(s, -s);
        ctx.lineTo(s, s);
        ctx.lineTo(-s, s);
        ctx.closePath();
        ctx.stroke();

        // Back face (with 3D offset)
        const offset = s * 0.3;
        ctx.beginPath();
        ctx.moveTo(-s + offset, -s - offset);
        ctx.lineTo(s + offset, -s - offset);
        ctx.lineTo(s + offset, s - offset);
        ctx.lineTo(-s + offset, s - offset);
        ctx.closePath();
        ctx.stroke();

        // Connect corners
        ctx.beginPath();
        ctx.moveTo(-s, -s);
        ctx.lineTo(-s + offset, -s - offset);
        ctx.moveTo(s, -s);
        ctx.lineTo(s + offset, -s - offset);
        ctx.moveTo(s, s);
        ctx.lineTo(s + offset, s - offset);
        ctx.moveTo(-s, s);
        ctx.lineTo(-s + offset, s - offset);
        ctx.stroke();

        ctx.restore();
      });

      requestAnimationFrame(animate);
    };
    animate();

    // Text animation
    anime({
      targets: ".hero-title",
      opacity: [0, 1],
      translateY: [40, 0],
      delay: 300,
      duration: 1200,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".hero-subtitle",
      opacity: [0, 1],
      translateY: [30, 0],
      delay: 800,
      duration: 1000,
      easing: "easeOutQuad",
    });

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-section="hero"
    >
      {/* Animated background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-black/50 to-deep-black -z-5" />

      {/* Content */}
      <div className="section-container text-center z-10">
        <h1
          className="hero-title font-persian text-6xl md:text-8xl font-bold mb-6 leading-tight"
          dir="rtl"
        >
          وقتی همه‌چیز سر جای خودش باشد.
        </h1>

        <p
          className="hero-subtitle font-persian text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          dir="rtl"
        >
          روبیکس کور، هسته‌ای برای نظم‌بخشی به تکنولوژی است.
          <br />
          ما سیستم‌هایی می‌سازیم که رشد می‌کنند.
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-electric-blue/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-electric-blue rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
