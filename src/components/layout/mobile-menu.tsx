"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { Link } from "@/i18n/navigation";
import type { NavItem } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { BrandLogo, Burger, Close } from "../icons";
import { Button, Text } from "../ui";

interface MobileMenuProps {
  items: NavItem[];
}

export const MobileMenu = ({ items }: MobileMenuProps) => {
  const t = useTranslations("header");
  const pathname = usePathname();

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
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2 text-black"
            >
              <BrandLogo className="h-4.5" />
              <Text className="font-display text-md font-semibold tracking-wider text-black">
                KLARO GATE
              </Text>
            </Link>

            <Dialog.Close asChild>
              <button
                className="hover:text-purple-accent flex h-15 w-15 shrink-0 items-center justify-center rounded-md bg-[#FAFAFA] text-black transition-colors"
                aria-label="Close menu"
              >
                <Close className="h-6 w-6" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="mb-5 flex flex-col">
            {[...items].reverse().map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Dialog.Close asChild key={item.tKey}>
                  <Link
                    href={item.href}
                    className={cn(
                      "border-t border-gray-200 py-6 text-center font-bold uppercase",
                      "transition-colors",
                      "hover:text-purple-light",
                      isActive ? "text-purple-light" : "text-black",
                    )}
                  >
                    {t(`nav.${item.tKey}`)}
                  </Link>
                </Dialog.Close>
              );
            })}
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
