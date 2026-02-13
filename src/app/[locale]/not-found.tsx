import { getTranslations } from "next-intl/server";
import Link from "next/link";

import { ArrowRight } from "@/components/icons";
import { Heading, Text } from "@/components/ui";

export default async function NotFound() {
  const t = await getTranslations("notFoundPage");

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <Heading as="h1" variant="hero" className="mb-4">
        404
      </Heading>
      <Heading as="h2" variant="section-lg" className="mb-4">
        {t("title")}
      </Heading>
      <Text className="mb-10 max-w-md opacity-70">{t("description")}</Text>
      <Link
        href="/"
        className="bg-purple-primary hover:bg-purple-accent inline-flex items-center gap-4 rounded-xl px-10 py-[1.875rem] text-base font-bold uppercase transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
      >
        {t("goHome")}
        <ArrowRight className="h-2 w-2" />
      </Link>
    </main>
  );
}
