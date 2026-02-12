import { getTranslations } from "next-intl/server";

import { CTABannerLayout } from "@/components/common";
import { Button, Heading } from "@/components/ui";

export const CTABanner = async ({
  bgImage,
  overlayClassName = "bg-linear-to-b from-[rgba(136,9,141,1)] to-[rgba(153,153,153,0)]",
  contentClassName,
  className,
}: {
  bgImage?: string;
  overlayClassName?: string;
  contentClassName?: string;
  className?: string;
}) => {
  const t = await getTranslations("mainPage.ctaBanner");

  return (
    <CTABannerLayout
      bgImage={bgImage}
      overlayClassName={overlayClassName}
      contentClassName={contentClassName}
      className={className}
    >
      <Heading
        as="h2"
        variant="section-lg"
        className="mb-8 text-[1.625rem] md:text-[2.5rem]"
      >
        {t("title")}
      </Heading>

      <Button variant="secondary">{t("cta")}</Button>
    </CTABannerLayout>
  );
};
