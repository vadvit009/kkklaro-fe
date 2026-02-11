import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /**
   * HTML element to render
   * @default "p"
   */
  as?: "p" | "span" | "div" | "label";
  /**
   * Text variant
   * - body: 16px,  white (card descriptions)
   * - card-lg: 22px, white (card descriptions)
   * - card: 18px, white (card descriptions)
   * - accordion: 22px, white, extralight (lists, accordions)
   * - copyright: 16px, white (footer copyright)
   * @default "body"
   */
  variant?: "body" | "card-lg" | "card" | "accordion" | "copyright";
}

const textBase = ["font-normal"];

const textVariants = {
  body: ["text-base", "leading-[1.6]", "text-text-primary"],
  "card-lg": [
    "text-[1.375rem]",
    "leading-[1.3]",
    "text-text-primary",
    "font-extralight",
  ],
  card: ["text-lg", "leading-[1.3]", "text-text-primary"],
  accordion: [
    "text-[1.375rem]",
    "leading-[1.45]",
    "font-extralight",
    "text-text-primary",
  ],
  copyright: ["text-base", "leading-[1.5]", "text-text-primary"],
};

export const Text = ({
  as: Component = "p",
  variant = "body",
  className,
  children,
  ...props
}: TextProps) => {
  return (
    <Component
      className={cn(textBase, textVariants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
