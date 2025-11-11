import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "small" | "large";
  showText?: boolean;
  animated?: boolean;
  className?: string;
}

export default function Logo({
  variant = "default",
  showText = true,
  animated = true,
  className = "",
}: LogoProps) {
  const sizes = {
    small: "w-8 h-8",
    default: "w-10 h-10",
    large: "w-16 h-16",
  };

  const textSizes = {
    small: "text-base",
    default: "text-xl",
    large: "text-3xl",
  };

  const letterSizes = {
    small: "text-base",
    default: "text-xl",
    large: "text-4xl",
  };

  return (
    <Link
      href="/"
      className={`flex items-center space-x-2 ${
        animated ? "group" : ""
      } ${className}`}
    >
      {/* Logo Icon */}
      <div
        className={`
           rounded-lg flex items-center justify-center ${
             animated
               ? "transform group-hover:scale-110 transition-transform duration-300"
               : ""
           }`}
      >
        <Image
          src="/logo.png"
          alt="Rubix Core"
          width={66}
          height={66}
          className={`text-deep-black font-display font-bold ${letterSizes[variant]}`}
        />
      </div>

      {/* Logo Text */}
      {showText && (
        <span
          className={`font-display ${textSizes[variant]} font-bold text-white`}
        >
          Rubix Core
        </span>
      )}
    </Link>
  );
}
