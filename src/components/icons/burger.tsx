import { SVGProps } from "react";

import { cn } from "@/lib/utils";

export const Burger = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="5"
    fill="none"
    viewBox="0 0 16 5"
    className={cn(className)}
    {...props}
  >
    <line
      x1="0"
      y1="0.5"
      x2="16"
      y2="0.5"
      stroke="currentColor"
      strokeWidth={1}
    />
    <line
      x1="0"
      y1="4.5"
      x2="16"
      y2="4.5"
      stroke="currentColor"
      strokeWidth={1}
    />
  </svg>
);
