"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { Link } from "@/i18n/navigation";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { BrandLogo } from "../icons";
import { Text } from "../ui";

export const Footer = () => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <footer className="border-border-light bg-bg-primary border-t">
      <div
        className={cn(
          "container-s flex flex-col items-center gap-7.5 py-10",
          "lg:flex-row lg:items-baseline lg:justify-between lg:py-12",
        )}
      >
        <div className="flex flex-col items-center gap-4.5 lg:items-start">
          <Link href="/" className="text-text-primary flex items-center gap-2">
            <BrandLogo className="h-[30px] w-[27px] md:h-7.5" />
            <Text
              as="span"
              className="font-display text-[2rem] font-semibold tracking-wider md:text-3xl"
            >
              KLARO GATE
            </Text>
          </Link>
          <Text variant="copyright">{t("footer.copyright")}</Text>
        </div>

        <nav
          className={cn(
            "flex flex-col-reverse items-center gap-4",
            "lg:flex-row lg:gap-[clamp(2rem,4vw,5rem)]",
          )}
        >
          {navLinks.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.tKey}
                href={item.href}
                className={cn(
                  "hover:text-purple-light text-base font-bold uppercase transition-colors",
                  isActive ? "text-purple-light" : "text-text-primary",
                )}
              >
                {t(`header.nav.${item.tKey}`)}
              </Link>
            );
          })}
          <Link
            href="/legal"
            className="text-text-primary hover:text-purple-light transition-colors"
          >
            {t("footer.legal")}
          </Link>
        </nav>
      </div>
    </footer>
  );
};
