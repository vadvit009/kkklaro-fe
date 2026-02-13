"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";

import { BrandLink } from "@/components/common";
import { useActiveNavLink } from "@/hooks/use-is-active";
import { Link } from "@/i18n/navigation";
import type { NavItem } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { Burger, Close } from "../icons";
import { Button } from "../ui";

interface MobileMenuProps {
  items: NavItem[];
}

export const MobileMenu = ({ items }: MobileMenuProps) => {
  const t = useTranslations("header");
  const isActive = useActiveNavLink();

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
        <Dialog.Content
          className={cn(
            "fixed inset-0 z-50 flex h-full w-full flex-col bg-white text-black",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "duration-300",
          )}
        >
          <div className="container-s flex w-full items-center justify-between py-2.5">
            <Dialog.Close asChild>
              <BrandLink className="text-black" textClassName="text-black" />
            </Dialog.Close>

            <Dialog.Close asChild>
              <button
                className="hover:text-purple-accent flex h-15 w-15 shrink-0 items-center justify-center rounded-md bg-[#FAFAFA] text-black transition-colors"
                aria-label="Close menu"
              >
                <Close className="h-6 w-6" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="mb-5">
            <ul className="flex flex-col">
              {[...items].reverse().map((item) => (
                <li key={item.tKey}>
                  <Dialog.Close asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "hover:text-purple-light block border-t border-gray-200 py-6 text-center font-bold uppercase transition-colors",
                        isActive(item.href)
                          ? "text-purple-light"
                          : "text-black",
                      )}
                    >
                      {t(`nav.${item.tKey}`)}
                    </Link>
                  </Dialog.Close>
                </li>
              ))}
            </ul>
          </nav>

          <div className="container-s w-full">
            <Dialog.Close asChild>
              <Button
                variant="primary"
                className="w-full rounded-2xl py-8 text-lg"
              >
                {t("getInTouch")}
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
