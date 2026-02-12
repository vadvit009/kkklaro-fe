import { getTranslations } from "next-intl/server";

import { FeatureItem } from "@/components/common";
import { Heading, Text } from "@/components/ui";
import { cn } from "@/lib/utils";

export const FeaturesSection = async () => {
  const t = await getTranslations("mainPage.features");

  const features = [
    t("list.walletCreation"),
    t("list.paymentTracking"),
    t("list.aggregatedBalances"),
    t("list.withdrawalFlows"),
    t("list.oneDashboard"),
  ];

  return (
    <section
      className={cn(
        "bg-bg-secondary px-5 py-20",
        "md:px-10 md:py-28",
        "xl:px-20",
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Heading
              as="h2"
              variant="section-lg"
              className={cn("mb-6 text-2xl", "md:text-3xl", "xl:text-[2.5rem]")}
            >
              {t("title")}
            </Heading>

            <Text
              variant="card"
              className={cn(
                "text-text-primary/70 mb-10 text-base",
                "md:text-lg",
              )}
            >
              {t("description")}
            </Text>

            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <FeatureItem key={index}>{feature}</FeatureItem>
              ))}
            </div>
          </div>

          <div
            className={cn(
              "flex items-center justify-center",
              "from-purple-primary/20 rounded-2xl bg-gradient-to-br to-transparent",
              "min-h-[300px] lg:min-h-[400px]",
            )}
          >
            <div className="bg-purple-primary/30 h-48 w-48 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
