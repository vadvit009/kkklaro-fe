import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { Heading, Text } from "@/components/ui";
import { cn } from "@/lib/utils";

export const BuiltForSection = async () => {
  const t = await getTranslations("mainPage.builtFor");

  const cards = [
    {
      key: "ecommerce",
      image: "/images/home/build-for-1.png",
      title: t("ecommerce.title"),
      description: t("ecommerce.description"),
    },
    {
      key: "marketplaces",
      image: "/images/home/build-for-2.png",
      title: t("marketplaces.title"),
      description: t("marketplaces.description"),
    },
    {
      key: "fintech",
      image: "/images/home/build-for-3.png",
      title: t("fintech.title"),
      description: t("fintech.description"),
    },
  ];

  return (
    <section
      className={cn(
        "bg-bg-primary py-20 pt-49 pb-13",
        "md:py-28 md:pt-69 md:pb-15",
      )}
    >
      <div className="container mx-auto max-w-7xl text-center">
        <Heading
          as="h2"
          variant="section-xl"
          className={cn(
            "mx-auto mb-7 max-w-xs text-center",
            "md:mb-8 md:max-w-full md:text-6xl",
          )}
        >
          {t("title")}
        </Heading>

        <ul className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <BuiltForCard
              key={card.key}
              image={card.image}
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
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <li className={cn("flex flex-col md:p-6")}>
      <Image
        src={image}
        alt={title}
        width={120}
        height={120}
        quality={100}
        unoptimized
        className="mx-auto"
      />
      <Heading as="h3" variant="card">
        {title}
      </Heading>
      <Text variant="card-lg">{description}</Text>
    </li>
  );
}
