import { SVGProps } from "react";

import { cn } from "@/lib/utils";

export const ArrowRight = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 8 8"
    className={cn(className)}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.8}
      d="M4.073 0c.144 0 .261.054.362.153L7.82 3.585A.6.6 0 0 1 8 4a.55.55 0 0 1-.179.41L4.435 7.847c-.1.099-.223.153-.362.153a.52.52 0 0 1-.517-.537c0-.149.056-.28.156-.383L6.32 4.444H0v-.888h6.32L3.712.92a.55.55 0 0 1-.156-.383A.52.52 0 0 1 4.073 0"
    />
  </svg>
);
