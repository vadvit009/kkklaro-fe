"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

import { Button, Heading, Text } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("errorPage");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <Heading as="h1" variant="section-lg" className="mb-4">
        {t("title")}
      </Heading>
      <Text className="mb-10 max-w-md opacity-70">{t("description")}</Text>
      <Button variant="primary" onClick={reset}>
        {t("retry")}
      </Button>
    </main>
  );
}
