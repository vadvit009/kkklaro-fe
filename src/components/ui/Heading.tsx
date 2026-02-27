import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * HTML element to render
   * @default "h2"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * Heading variant (independent of HTML tag)
   * - hero: 60px, SemiBold (Hero section)
   * - section-xl: 48px, ExtraLight (Section headings)
   * - section-lg: 40px, Medium (Section headings)
   * - card: 32px, Medium (Card headings)
   * - small: 20px, Medium (Small headings)
   * @default "section-xl"
   */
  variant?: "hero" | "section-xl" | "section-lg" | "card" | "small";
}

const headingVariants = {
  hero: ["text-[3.75rem]", "font-semibold", "leading-[1.1]", "text-text-hero"],
  "section-xl": [
    "text-[2rem]",
    "font-extralight",
    "leading-[1.25]",
    "text-text-primary",
  ],
  "section-lg": [
    "text-[1.625rem] md:text-[2.5rem]",
    "font-medium",
    "leading-[1.2]",
    "text-text-primary",
  ],
  card: ["text-[2rem]", "font-regular", "leading-[1.3]", "text-text-primary"],
  small: ["text-xl", "font-medium", "leading-[1.4]", "text-text-primary"],
};

export const Heading = ({
  as: Component = "h2",
  variant = "section-xl",
  className,
  children,
  ...props
}: HeadingProps) => {
  return (
    <Component className={cn(headingVariants[variant], className)} {...props}>
      {children}
    </Component>
  );
};
