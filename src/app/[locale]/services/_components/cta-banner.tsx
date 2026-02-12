import { getTranslations } from "next-intl/server";

import { CTABannerLayout } from "@/components/common";
import { Button, Heading } from "@/components/ui";

export const CTABanner = async () => {
  const t = await getTranslations("servicesPage.ctaBanner");

  return (
    <CTABannerLayout
      overlayClassName="bg-linear-to-b from-[rgba(136,9,141,0.2)] to-[rgba(153,153,153,0.2)]"
      className="pt-20 pb-12 md:pt-26 md:pb-15"
    >
      <Heading
        as="h2"
        variant="section-lg"
        className="mb-10 text-[2.25rem] md:mb-15 md:text-[3.75rem]"
      >
        {t("title")}
      </Heading>

      <Button variant="secondary">{t("cta")}</Button>
    </CTABannerLayout>
  );
};
