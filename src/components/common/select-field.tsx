import * as RadixSelect from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import type { SelectOption } from "@/types/common";

import { FieldWrapper } from "./field-wrapper";

interface SelectFieldProps {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;

  label?: string;
  error?: string;
  hint?: string;

  placeholder?: React.ReactNode;
  options: SelectOption[];

  required?: boolean;
  className?: string;
  wrapperClassName?: string;
  disabled?: boolean;
}

const triggerStyles = cn(
  "flex w-full items-center justify-between border-b border-border-light bg-transparent px-0 pt-7 pb-7 text-sm font-bold uppercase  text-text-primary",
  "transition-colors",
  "focus:border-purple-accent focus:outline-none",
  "data-[placeholder]:text-text-primary",
);

const contentStyles = cn(
  "z-50  overflow-hidden border border-border-light bg-bg-primary shadow-xl",
);

const itemStyles = cn(
  "relative flex cursor-pointer select-none items-center gap-3 px-4 py-3 text-sm font-bold uppercase text-text-primary outline-none transition",
  "data-[highlighted]:bg-white/5",
  // "data-[state=checked]:text-purple-accent",
  "data-[disabled]:opacity-50 data-[disabled]:pointer-events-none",
);

export function SelectField({
  id,
  value,
  onChange,
  label,
  error,
  hint,
  placeholder = "Select option" as React.ReactNode,
  options,
  className,
  wrapperClassName,
  required,
  disabled,
}: SelectFieldProps) {
  return (
    <FieldWrapper
      id={id}
      label={label}
      error={error}
      hint={hint}
      className={wrapperClassName}
    >
      <RadixSelect.Root
        value={value}
        onValueChange={onChange}
        disabled={disabled}
      >
        <RadixSelect.Trigger
          id={id}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${id}-error` : hint ? `${id}-hint` : undefined
          }
          className={cn(triggerStyles, error && "border-error", className)}
        >
          <span className="flex items-center text-base">
            <RadixSelect.Value placeholder={placeholder} />
            {required && <span className="text-required">&nbsp;*</span>}
          </span>
          <RadixSelect.Icon className="text-text-primary ml-2">
            <ChevronDown size={18} />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
          <RadixSelect.Content
            position="popper"
            // sideOffset={8}
            className={contentStyles}
          >
            <RadixSelect.Viewport className="p-2">
              {options.map((opt) => (
                <RadixSelect.Item
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.disabled}
                  className={itemStyles}
                >
                  <RadixSelect.ItemIndicator className="border-text-primary flex h-4 w-4 items-center justify-center rounded-full border">
                    <div className="bg-text-primary h-2 w-2 rounded-full" />
                  </RadixSelect.ItemIndicator>
                  <RadixSelect.ItemText>{opt.label}</RadixSelect.ItemText>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </FieldWrapper>
  );
}
