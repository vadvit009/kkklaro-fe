"use client";

import Image from "next/image";
import { useState } from "react";

import highImg from "@/public/images/home/hero-logo-opti.webp";
import lowImg from "@/public/images/home/hero-logo@2x-opti.webp";

export const HeroLogo = ({ className }: { className?: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* LOW — LCP */}
      <Image
        src={"/images/home/hero-logo-opti.webp"}
        alt="hero logo"
        fill
        priority
        sizes="(max-width: 1024px) 150px, 296px"
        className="object-contain"
      />

      {/* HIGH — overlay */}
      <Image
        src={"/images/home/hero-logo@2x-opti.webp"}
        alt=""
        fill
        unoptimized
        sizes="(max-width: 1024px) 150px, 296px"
        className={`object-contain transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};
