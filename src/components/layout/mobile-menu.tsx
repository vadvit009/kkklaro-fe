"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";

import type { NavItem } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { Burger, Close } from "../icons";
import { Button } from "../ui";

interface MobileMenuProps {
  items: NavItem[];
}

export const MobileMenu = ({ items }: MobileMenuProps) => {
  const t = useTranslations("header");

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="bg-purple-primary text-text-primary flex h-15 w-15 shrink-0 items-center justify-center rounded-md p-2 lg:hidden"
          aria-label="Open menu"
        >
          <Burger className="w-4" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-40 bg-black/80 backdrop-blur-sm",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          )}
        />

        <Dialog.Content
          className={cn(
            "bg-bg-primary fixed top-0 right-0 z-50 h-full w-[300px] p-6",
            "shadow-xl",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
            "duration-300",
          )}
        >
          <div className="flex items-center justify-end">
            <Dialog.Close asChild>
              <button
                className="text-text-primary hover:text-purple-accent p-2 transition-colors"
                aria-label="Close menu"
              >
                <Close className="h-6 w-6" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="mt-8 flex flex-col gap-4">
            {items.map((item) => (
              <a
                key={item.tKey}
                href={item.href}
                className={cn(
                  "text-text-primary px-4 py-3 text-lg font-medium",
                  "rounded-lg transition-colors",
                  "hover:bg-purple-primary/10 hover:text-purple-light",
                )}
              >
                {t(`nav.${item.tKey}`)}
              </a>
            ))}
          </nav>

          <div className="mt-8">
            <Button variant="primary" className="w-full">
              {t("bookDemo")}
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
