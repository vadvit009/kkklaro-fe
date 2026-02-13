"use client";

import { useTranslations } from "next-intl";

import { BrandLink } from "@/components/common";
import { useActiveNavLink } from "@/hooks/use-is-active";
import { Link } from "@/i18n/navigation";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { Text } from "../ui";

export const Footer = () => {
  const t = useTranslations("footer");
  const tHeader = useTranslations("header");
  const isActive = useActiveNavLink();

  return (
    <footer className="border-text-primary/10 bg-bg-primary border-t py-12 md:py-16">
      <div className="container-s">
        <div className="mx-auto flex w-full max-w-[1350px] flex-col items-center gap-7.5 md:mx-0 lg:flex-row lg:items-baseline lg:justify-between">
          <div className="flex flex-col items-center gap-4.5 lg:items-start">
            <BrandLink
              className="text-text-primary"
              logoClassName="h-[30px] w-[27px]"
              textClassName="text-[2rem]"
            />
            <Text>{t("copyright", { year: new Date().getFullYear() })}</Text>
          </div>

          <nav>
            <ul className="flex flex-col-reverse items-center gap-4 lg:flex-row lg:gap-[clamp(2rem,4vw,5rem)]">
              {navLinks.map((item) => (
                <li key={item.tKey}>
                  <Link
                    href={item.href}
                    className={cn(
                      "hover:text-purple-light text-base font-bold uppercase transition-colors",
                      isActive(item.href)
                        ? "text-purple-light"
                        : "text-text-primary",
                    )}
                  >
                    {tHeader(`nav.${item.tKey}`)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/legal"
                  className="text-text-primary hover:text-purple-light transition-colors"
                >
                  {t("legal")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
