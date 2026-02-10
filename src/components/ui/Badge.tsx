import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

const badgeBase = [
  "inline-flex items-center justify-center",
  "px-3 py-1.5",
  "rounded-badge",
  "text-xs font-medium uppercase tracking-wide",
  "transition-colors duration-200",
];

const badgeVariants = {
  default: [
    "bg-purple-primary/20",
    "text-purple-light",
    "border border-purple-primary/30",
  ],
  outline: [
    "bg-transparent",
    "text-text-primary",
    "border border-border-light",
  ],
};

export const Badge = ({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(badgeBase, badgeVariants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};
