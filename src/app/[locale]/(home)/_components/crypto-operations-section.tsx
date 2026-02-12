import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { Heading, Text } from "@/components/ui";
import { cn } from "@/lib/utils";

export const CryptoOperationsSection = async () => {
  const t = await getTranslations("mainPage.features");

  const items = [
    {
      key: "walletCreation",
      image: "/images/home/crypto-operations-1.png",
      label: t("list.walletCreation"),
    },
    {
      key: "paymentTracking",
      image: "/images/home/crypto-operations-2.png",
      label: t("list.paymentTracking"),
    },
    {
      key: "aggregatedBalances",
      image: "/images/home/crypto-operations-3.png",
      label: t("list.aggregatedBalances"),
    },
    {
      key: "withdrawalFlows",
      image: "/images/home/crypto-operations-4.png",
      label: t("list.withdrawalFlows"),
    },
    {
      key: "oneDashboard",
      image: "/images/home/crypto-operations-5.png",
      label: t("list.oneDashboard"),
    },
  ];

  return (
    <section className={cn("bg-bg-primary py-20 md:py-28")}>
      <div className="container mx-auto text-center">
        <Heading
          as="h2"
          variant="section-xl"
          className={cn(
            "mx-auto mb-4 max-w-xs text-center",
            "md:mb-6 md:max-w-3xl md:text-6xl",
          )}
        >
          {t("title")}
        </Heading>

        <Text
          variant="card-lg"
          className={cn(
            "mx-auto mb-16 max-w-xs text-center",
            "md:mb-20 md:max-w-3xl",
          )}
        >
          {t("description")}
        </Text>

        <ul className="grid gap-8 md:grid-cols-5">
          {items.map((item) => (
            <CryptoOperationItem
              key={item.key}
              image={item.image}
              label={item.label}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

function CryptoOperationItem({
  image,
  label,
}: {
  image: string;
  label: string;
}) {
  return (
    <li className="mx-auto flex max-w-44 flex-col items-center">
      <Image
        src={image}
        alt={label}
        width={80}
        height={80}
        quality={100}
        unoptimized
        className="mx-auto mb-4"
      />
      <Text variant="body" className="text-center">
        {label}
      </Text>
    </li>
  );
}
