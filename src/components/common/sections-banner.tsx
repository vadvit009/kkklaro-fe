import React from "react";

import { cn } from "@/lib/utils";

export const SectionBanner = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "shadow-inset w-full rounded-2xl bg-[linear-gradient(180deg,rgba(76,54,76,0.06)_0%,rgba(153,153,153,0.06)_100%)] px-5 pt-12 pb-7.5 shadow-[inset_0_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-[100px] md:p-23",
        "border-1 border-t-white/20 border-r-white/2 border-b-white/1 border-l-white/10",
        className,
      )}
    >
      {children}
    </div>
  );
};
