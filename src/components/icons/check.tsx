import { SVGProps } from "react";

import { cn } from "@/lib/utils";

export const Check = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    className={cn(className)}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 10l4 4 8-8"
    />
  </svg>
);
