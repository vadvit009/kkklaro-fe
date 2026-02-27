import React from "react";

import { cn } from "@/lib/utils";

export const CTABannerLayout = ({
  bgImage = "/images/common/cta-bg@2x.png",
  overlayClassName,
  contentClassName,
  children,
  className,
}: {
  bgImage?: string;
  overlayClassName?: string;
  contentClassName?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-cover bg-center bg-no-repeat pt-21.5 pb-26",
        "md:pt-24 md:pb-32",
        "backdrop-blur-[100px]",
        "shadow-[inset_0_0_1px_0_rgba(255,255,255,0.25)]",
        className,
      )}
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div
        className={cn(
          "absolute inset-0",
          "backdrop-blur-[8px]",
          "shadow-[inset_0_0_1px_0_rgba(255,255,255,0.25)]",
          overlayClassName,
        )}
      />

      <div
        className={cn(
          "relative z-10 mx-auto max-w-3xl text-center",
          contentClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
};
