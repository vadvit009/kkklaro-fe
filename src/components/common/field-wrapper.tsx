import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface FieldWrapperProps {
  id?: string;
  label?: string;
  error?: string;
  hint?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function FieldWrapper({
  id,
  label,
  error,
  hint,
  children,
  className,
}: FieldWrapperProps) {
  return (
    <div className={cn("grid content-start", className)}>
      {label && (
        <label
          htmlFor={id}
          className="text-text-hero text-sm font-semibold uppercase"
        >
          {label}
        </label>
      )}

      {children}

      {hint && !error && (
        <p id={`${id}-hint`} className="text-text-primary/50 text-xs">
          {hint}
        </p>
      )}

      {error && (
        <p id={`${id}-error`} className="text-error text-xs">
          {error}
        </p>
      )}
    </div>
  );
}
