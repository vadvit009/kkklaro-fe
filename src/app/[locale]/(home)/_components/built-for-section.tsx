import { getTranslations } from "next-intl/server";
import { type ComponentType, type SVGProps } from "react";

import { BuildFor1Kc, BuildFor2Kc, BuildFor3Kc } from "@/components/icons";
import { Heading, Text } from "@/components/ui";

export const BuiltForSection = async () => {
  const t = await getTranslations("mainPage.builtFor");

  const cards = [
    {
      key: "ecommerce",
      Icon: BuildFor1Kc,
      title: t("ecommerce.title"),
      description: t("ecommerce.description"),
    },
    {
      key: "marketplaces",
      Icon: BuildFor2Kc,
      title: t("marketplaces.title"),
      description: t("marketplaces.description"),
    },
    {
      key: "fintech",
      Icon: BuildFor3Kc,
      title: t("fintech.title"),
      description: t("fintech.description"),
    },
  ];

  return (
    <section className="bg-bg-primary py-20 pt-49 pb-13 md:py-28 md:pt-69 md:pb-15">
      <div className="container mx-auto max-w-7xl text-center">
        <Heading
          as="h2"
          variant="section-xl"
          className="mx-auto mb-7 max-w-xs text-center md:mb-8 md:max-w-full md:text-6xl"
        >
          {t("title")}
        </Heading>

        <ul className="grid gap-20 md:grid-cols-3">
          {cards.map((card) => (
            <BuiltForCard
              key={card.key}
              Icon={card.Icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

function BuiltForCard({
  Icon,
  title,
  description,
}: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}) {
  return (
    <li className="flex flex-col">
      <Icon className="mx-auto h-30 w-30 overflow-hidden" aria-label={title} />
      <Heading as="h3" variant="card">
        {title}
      </Heading>
      <Text variant="card-lg">{description}</Text>
    </li>
  );
}
