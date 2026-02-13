import { getTranslations } from "next-intl/server";

import { Heading, Text } from "@/components/ui";

export const HeroSection = async () => {
  const t = await getTranslations("servicesPage");

  return (
    <section className="container-s pt-25 pb-13 lg:pt-11 lg:pb-15">
      <Text
        as="p"
        variant="body"
        className="mb-0.5 text-sm font-bold tracking-widest uppercase md:mb-5"
      >
        {t("subtitle")}
      </Text>
      <Heading
        as="h1"
        variant="hero"
        className="max-w-2xl text-[2.5rem] leading-[1.1] md:text-[5rem]"
      >
        {t("title")}
      </Heading>
    </section>
  );
};
