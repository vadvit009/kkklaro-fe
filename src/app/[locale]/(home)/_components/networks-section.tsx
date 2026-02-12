import { getTranslations } from "next-intl/server";

import { Heading, Text } from "@/components/ui";
import { cn } from "@/lib/utils";

export const NetworksSection = async () => {
  const t = await getTranslations("mainPage.networks");

  return (
    <section
      id="networks"
      className={cn(
        "bg-[#040206] px-5 py-20",
        "md:px-10 md:py-28 md:pt-38",
        "xl:px-20",
      )}
    >
      <div className="container">
        <div
          className={cn(
            "grid gap-12 bg-[url('/images/home/networks-bg-mob.png')] bg-center bg-no-repeat",
            "lg:gap-20 xl:grid-cols-2 xl:bg-[url('/images/home/networks-bg.png')] xl:bg-[position:-90px_center]",
          )}
        >
          <div className={cn("order-2 lg:order-1")} />

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
