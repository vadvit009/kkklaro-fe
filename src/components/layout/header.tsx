"use client";

import { useTranslations } from "next-intl";

import { BrandLink } from "@/components/common";
import { useActiveNavLink } from "@/hooks/use-is-active";
import { useScrolled } from "@/hooks/use-scrolled";
import { Link } from "@/i18n/navigation";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { Button } from "../ui";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  const t = useTranslations("header");
  const isActive = useActiveNavLink();
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        "lg:border-text-primary/10 fixed top-0 right-0 left-0 z-30 py-2.5 transition-colors duration-300 lg:border",
        "lg:bg-bg-primary lg:static lg:py-7",
        scrolled ? "bg-bg-primary" : "bg-transparent",
      )}
    >
      <div className="container-s flex shrink-0 items-center justify-between gap-4">
        <BrandLink className="text-text-primary" />

        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-[clamp(0.75rem,3vw,5rem)]">
            {navLinks.map((item) => (
              <li key={item.tKey}>
                <Link
                  href={item.href}
                  className={cn(
                    "hover:text-purple-light font-bold uppercase",
                    isActive(item.href)
                      ? "text-purple-light"
                      : "text-text-primary",
                  )}
                >
                  {t(`nav.${item.tKey}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button variant="primary" className="hidden lg:flex">
          {t("signUp")}
        </Button>

        <MobileMenu items={navLinks} />
      </div>
    </header>
  );
};
