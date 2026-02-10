"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { Link } from "@/i18n/navigation";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { BrandLogo } from "../icons";
import { Button, Text } from "../ui";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  const t = useTranslations("header");
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "absolute top-0 right-0 left-0 z-30 py-2.5",
        "md:bg-bg-primary md:static md:py-7",
      )}
    >
      <div
        className={cn(
          "container-s flex shrink-0 items-center justify-between gap-4",
        )}
      >
        <Link
          href="/"
          className="text-text-primary flex shrink-0 items-center gap-2"
        >
          <BrandLogo className="h-4.5 md:h-7.5 md:w-[27px]" />
          <Text className="font-display text-md font-semibold tracking-wider md:text-3xl">
            KLARO GATE
          </Text>
        </Link>

        <nav className="hidden items-center gap-[clamp(0.75rem,3vw,5rem)] lg:flex">
          {navLinks.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.tKey}
                href={item.href}
                className={cn(
                  "hover:text-purple-light uppercase",
                  isActive ? "text-purple-light" : "text-text-primary",
                )}
              >
                {t(`nav.${item.tKey}`)}
              </Link>
            );
          })}
        </nav>

        <Button variant="primary" className="hidden lg:flex">
          {t("bookDemo")}
        </Button>

        <MobileMenu items={navLinks} />
      </div>
    </header>
  );
};
