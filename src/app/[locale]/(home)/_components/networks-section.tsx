import { getTranslations } from "next-intl/server";

import { Heading, Text } from "@/components/ui";
import { cn } from "@/lib/utils";

export const NetworksSection = async () => {
  const t = await getTranslations("networks");

  return (
    <section
      id="networks"
      className={cn(
        "bg-bg-primary px-5 py-20",
        "md:px-10 md:py-28",
        "xl:px-20",
      )}
    >
      <div className="container">
        <div className="grid gap-12 lg:gap-20 xl:grid-cols-2">
          <div
            className={cn(
              "flex items-center justify-center",
              "order-2 lg:order-1",
            )}
          ></div>

          <div className="order-1 lg:order-2">
            <Heading
              as="h2"
              variant="section-lg"
              className={cn(
                "mb-8.5 text-[2rem]",
                "md:text-[3rem] md:font-extralight",
                "xl:mb-30",
              )}
            >
              {t("title")}
            </Heading>

            <div className="space-y-6">
              <div>
                <Text variant="card-lg" className="text-[2rem] font-semibold">
                  {t("networksLabel")}
                </Text>
                <Text variant="card-lg" className="text-[2rem] font-extralight">
                  {t("networksList")}
                </Text>
              </div>

              <div>
                <Text variant="card-lg" className="text-[2rem] font-semibold">
                  {t("assetsLabel")}
                </Text>
                <Text variant="card-lg" className="text-[2rem] font-extralight">
                  {t("assetsList")}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
