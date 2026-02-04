import { ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

import { ArrowRight } from "../icons";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   * - primary: Purple gradient background (main actions)
   * - secondary: Black background (secondary actions)
   * - ghost: Transparent with purple border
   */
  variant?: "primary" | "secondary" | "ghost";
}

const buttonBase = [
  "inline-flex gap-4 items-center justify-center",
  "px-10 py-[1.875rem]",
  "rounded-xl",
  "font-bold text-base uppercase",
  "text-text-primary",
  "transition-all duration-200",
  "disabled:opacity-50 disabled:cursor-not-allowed",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
];

const buttonVariants = {
  primary: [
    "bg-purple-primary",
    "hover:bg-purple-accent hover:scale-[1.02]",
    "active:scale-[0.98]",
  ],
  secondary: [
    "bg-black",
    "hover:bg-[#242424] hover:border hover:border-purple-accent",
  ],
  ghost: [
    "bg-transparent",
    "border border-purple-accent",
    "hover:bg-[rgba(168,85,247,0.1)]",
  ],
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonBase, buttonVariants[variant], className)}
        {...props}
      >
        {children}
        <ArrowRight className="h-2 w-2" />
      </button>
    );
  },
);

Button.displayName = "Button";
