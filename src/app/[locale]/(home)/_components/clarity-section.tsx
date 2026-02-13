import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { Heading } from "@/components/ui";

import { ClarityListItem } from "./clarity-list-item";

export const ClaritySection = async () => {
  const t = await getTranslations("mainPage.clarity");

  const items = [
    { line1: t("items.item1.line1"), line2: t("items.item1.line2") },
    { line1: t("items.item2.line1"), line2: t("items.item2.line2") },
    { line1: t("items.item3.line1"), line2: t("items.item3.line2") },
    { line1: t("items.item4.line1"), line2: t("items.item4.line2") },
    { line1: t("items.item5.line1"), line2: t("items.item5.line2") },
  ];

  return (
    <section
      id="clarity"
      className="mt-15 w-full bg-[url('/images/home/clarity-bg.png')] bg-cover bg-center bg-no-repeat md:pt-18 md:pt-24 lg:pb-20"
    >
      <div className="container-s">
        <Heading
          as="h2"
          variant="section-lg"
          className="mb-8 text-center md:mb-17"
        >
          {t("title")}
        </Heading>

        <div className="flex flex-col lg:flex-row lg:gap-8">
          <div className="mb-4.5 flex flex-col lg:mb-0 lg:w-1/2">
            <ul className="flex flex-col text-[1.375rem] leading-[1.45455]">
              {items.map((item, index) => (
                <ClarityListItem
                  key={index}
                  line1={item.line1}
                  line2={item.line2}
                />
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center lg:w-1/2 xl:mb-[-80px] xl:items-end">
            <Image
              src="/images/home/onboarding.png"
              width={769}
              height={506}
              alt="Clarity section preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
