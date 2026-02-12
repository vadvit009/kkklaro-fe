import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { FieldWrapper } from "./field-wrapper";

interface InputFieldProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "placeholder"
> {
  label?: string;
  error?: string;
  hint?: string;
  placeholder?: ReactNode;
  wrapperClassName?: string;
}

const inputStyles = cn(
  "peer w-full border-b border-border-light bg-transparent px-0 pt-7 pb-8 text-sm font-bold uppercase text-text-primary",
  "transition-colors",
  "focus:border-purple-accent focus:outline-none",
  "disabled:cursor-not-allowed disabled:opacity-50",
);

export function InputField({
  id,
  label,
  type = "text",
  error,
  hint,
  placeholder,
  className,
  wrapperClassName,
  readOnly,
  ...props
}: InputFieldProps) {
  return (
    <FieldWrapper
      id={id}
      label={label}
      error={error}
      hint={hint}
      className={wrapperClassName}
    >
      <div className="relative">
        <input
          id={id}
          type={type}
          readOnly={readOnly}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${id}-error` : hint ? `${id}-hint` : undefined
          }
          placeholder=" "
          className={cn(
            inputStyles,
            error && "border-error",
            readOnly && "opacity-70",
            className,
          )}
          {...props}
        />
        {placeholder && (
          <span className="text-text-primary absolute top-7 left-0 text-base font-bold uppercase not-first:pointer-events-none peer-focus:hidden peer-[:not(:placeholder-shown)]:hidden">
            {placeholder}
          </span>
        )}
      </div>
    </FieldWrapper>
  );
}
