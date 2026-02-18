"use client";

import Image from "next/image";
import { type ComponentType, type SVGProps, useEffect, useState } from "react";

type SvgComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const HeroLogo = ({ className }: { className?: string }) => {
  const [Logo, setLogo] = useState<SvgComponent | null>(null);

  useEffect(() => {
    import("@/components/icons/logo-bg-kc").then((m) => {
      setLogo(() => m.LogoBgKc);
    });
  }, []);

  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/home/hero-logo.png"
        alt=""
        fill
        priority
        className={`object-contain ${Logo ? "invisible" : "visible"}`}
      />
      {Logo && <Logo className="h-full w-full" />}
    </div>
  );
};
