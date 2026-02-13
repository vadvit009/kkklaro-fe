import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { SectionBanner } from "@/components/common/sections-banner";
import { Button, Heading, Text } from "@/components/ui";

export const HeroSection = async () => {
  const t = await getTranslations("mainPage.hero");

  return (
    <section
      className="bg-purple-primary relative grid grid-cols-1 before:absolute before:inset-0 before:z-[1] before:bg-black/40"
      style={{ boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none col-start-1 row-start-1 h-full w-full overflow-hidden object-cover"
      >
        <source src="/images/home/hero-bg-animation.mp4" type="video/mp4" />
      </video>
      <div className="z-1 col-start-1 row-start-1 container mx-auto flex flex-col items-center justify-center px-5 pt-38 text-center md:px-10 md:pt-70">
        <Image
          src="/images/home/hero-logo.png"
          // src="/images/home/LOGO.png"
          alt="Hero image"
          width={297}
          height={297}
          // width={1339}
          // height={979}
          className="mx-auto h-37.5 w-37.5 md:mb-5 lg:h-74 lg:w-74"
        />
        <Heading
          as="h1"
          variant="hero"
          className="mx-auto mb-6 text-[2rem] md:text-6xl xl:max-w-6xl"
        >
          {t("title")}
        </Heading>

        <Text
          variant="card-lg"
          className="mx-auto mb-8 max-w-2xl text-xl md:text-3xl"
        >
          {t("description")}
        </Text>

        <SectionBanner className="mb-[-86px] text-center md:mb-[-135px]">
          <div className="mb-10 flex flex-col items-center gap-4 lg:mb-6">
            <Heading variant="section-lg">{t("seeInAction")}</Heading>
            <Text variant="card" className="text-base md:text-lg">
              {t("seeInActionDescription")}
            </Text>
          </div>

          <Button variant="primary">{t("cta")}</Button>
        </SectionBanner>
      </div>
    </section>
  );
};
