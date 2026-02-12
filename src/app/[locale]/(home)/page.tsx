import { getTranslations } from "next-intl/server";

import { CTABannerLayout } from "@/components/common";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button, Heading } from "@/components/ui";

import {
  BuiltForSection,
  ClaritySection,
  CryptoOperationsSection,
  FAQSection,
  FeaturesSection,
  HeroSection,
  NetworksSection,
  OnboardingSection,
} from "./_components";

export default async function HomePage() {
  const t = await getTranslations("ctaBanner");

  return (
    <>
      <main>
        <HeroSection />
        <BuiltForSection />
        <CryptoOperationsSection />Н
        <CTABannerLayout overlayClassName="bg-linear-to-b from-[rgba(136,9,141,1)] to-[rgba(153,153,153,0)]">
          <Heading
            as="h2"
            variant="section-lg"
            className="mx-auto mb-8 max-w-md text-[1.625rem] md:text-[2.5rem]"
          >
            {t("title")}
          </Heading>
          <Button variant="secondary">{t("cta")}</Button>
        </CTABannerLayout>
        <OnboardingSection />
        <NetworksSection />
        <CTABannerLayout
          bgImage="/images/home/cta-bg-secondary.png"
          overlayClassName="bg-linear-to-b from-[rgba(136,9,141,0.06)] to-[rgba(153,153,153,0.06)]"
          contentClassName="max-w-none"
          className="md:"
        >
          <Heading
            as="h2"
            variant="section-lg"
            className="mb-18.5 text-[1.625rem] md:text-[2.5rem]"
          >
            {t("title")}
          </Heading>
          <Button variant="primary">{t("cta")}</Button>
        </CTABannerLayout>
        <ClaritySection />
        <FAQSection />
      </main>
    </>
  );
}
