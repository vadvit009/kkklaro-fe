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
        "shadow-inset w-full rounded-lg bg-[linear-gradient(180deg,rgba(76,54,76,0.06)_0%,rgba(153,153,153,0.06)_100%)] px-5 pt-12 pb-7.5 shadow-[inset_0_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-[100px] md:p-23",
        className,
      )}
    >
      {children}
    </div>
  );
};
