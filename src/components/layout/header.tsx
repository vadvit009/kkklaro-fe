"use client";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { mobileNavLinks, navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { BrandLogo } from "../icons";
import { Button, Text } from "../ui";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  const t = useTranslations("header");

  return (
    <header
      className={cn(
        "absolute top-0 right-0 left-0 z-30 p-2.5",
        "md:p-7",
        "bg-bg-primary/80 backdrop-blur-md",
        "border-border-light/50 border-b",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-16 max-w-[1556px] shrink-0 items-center justify-between gap-4",
          "px-5",
          "md:h-20 md:px-10",
          "xl:px-20",
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
          {navLinks.map((item) => (
            <Link
              key={item.tKey}
              href={item.href}
              className="text-text-primary hover:text-purple-light uppercase"
            >
              {t(`nav.${item.tKey}`)}
            </Link>
          ))}
        </nav>

        <Button variant="primary" className="hidden lg:flex">
          {t("bookDemo")}
        </Button>

        <MobileMenu items={mobileNavLinks} />
      </div>
    </header>
  );
};
