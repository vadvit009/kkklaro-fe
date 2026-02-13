import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { CTABanner, HeroSection, ServicesListSection } from "./_components";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.services" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ServicesPage() {
  return (
    <main>
      <HeroSection />
      <ServicesListSection />
      <CTABanner />
    </main>
  );
}
