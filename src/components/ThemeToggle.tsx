"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-2 rounded-lg border border-light-gray/20 bg-soft-gray/20 backdrop-blur-sm w-9 h-9" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-light-gray/20 bg-soft-gray/20 hover:bg-soft-gray/40 transition-colors backdrop-blur-sm"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="text-electric-blue" size={20} strokeWidth={1.5} />
      ) : (
        <Moon className="text-electric-blue" size={20} strokeWidth={1.5} />
      )}
    </button>
  );
}
