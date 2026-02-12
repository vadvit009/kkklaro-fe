import type { ReactNode, TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { FieldWrapper } from "./field-wrapper";

interface TextareaFieldProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "placeholder"
> {
  label?: string;
  error?: string;
  hint?: string;
  placeholder?: ReactNode;
  wrapperClassName?: string;
}

const textareaStyles = cn(
  "peer w-full border-b border-border-light bg-transparent px-0 pt-7 pb-8 text-sm font-bold uppercase text-text-primary",
  "transition-colors",
  "focus:border-purple-accent focus:outline-none",
  "disabled:cursor-not-allowed disabled:opacity-50 resize-none",
);

export function TextareaField({
  id,
  label,
  error,
  hint,
  placeholder,
  className,
  wrapperClassName,
  readOnly,
  ...props
}: TextareaFieldProps) {
  return (
    <FieldWrapper
      id={id}
      label={label}
      error={error}
      hint={hint}
      className={wrapperClassName}
    >
      <div className="relative">
        <textarea
          id={id}
          rows={1}
          readOnly={readOnly}
          placeholder=" "
          aria-invalid={!!error}
          aria-describedby={
            error ? `${id}-error` : hint ? `${id}-hint` : undefined
          }
          className={cn(textareaStyles, error && "border-error", className)}
          {...props}
        />
        {placeholder && (
          <span className="text-text-primary pointer-events-none absolute top-7 left-0 text-base font-bold uppercase peer-focus:hidden peer-[:not(:placeholder-shown)]:hidden">
            {placeholder}
          </span>
        )}
      </div>
    </FieldWrapper>
  );
}
