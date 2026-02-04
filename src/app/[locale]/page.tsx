"use client";
import { Locale, useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

import { Button, Heading } from "@/components/ui";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function Home() {
  const t = useTranslations("homePage");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  function changeLocale() {
    const nextLocale = locale === "en" ? "uk" : ("en" as Locale);
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }
  return (
    <div className="flex h-svh flex-col items-center justify-center gap-8 bg-black">
      <p onClick={changeLocale} className="max-w-2xs text-5xl text-amber-400">
        {t("greeting")}
      </p>
      <Heading variant="hero">{t("title")}</Heading>
      <Button variant="primary">{t("title")}</Button>
    </div>
  );
}
