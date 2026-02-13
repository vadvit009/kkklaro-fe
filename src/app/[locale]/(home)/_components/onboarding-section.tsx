import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { StepItem } from "@/components/common";
import { SectionBanner } from "@/components/common/sections-banner";
import { ArrowRight } from "@/components/icons";
import { Heading, Text } from "@/components/ui";
import { cn } from "@/lib/utils";

export const OnboardingSection = async () => {
  const t = await getTranslations("mainPage.steps");

  const steps = [
    t("step1"),
    t("step2"),
    t("step3"),
    t("step4"),
    t("step5"),
    t("step6"),
  ];

  return (
    <section id="steps">
      <div className="container">
        <SectionBanner
          className={cn(
            "mt-[-74px] mb-[-40px] pt-18 pb-0",
            "md:px-12 md:pt-18 md:pb-0",
          )}
        >
          <div className="flex flex-col lg:flex-row lg:gap-8">
            <div className="mb-4.5 flex flex-col lg:mb-0 lg:w-1/2 lg:pb-20">
              <Heading as="h2" variant="section-lg" className="mb-8 md:mb-17">
                {t("title")}
              </Heading>
              <ol className="mb-6 flex flex-col">
                {steps.map((step, index) => (
                  <StepItem key={index} number={index + 1}>
                    {step}
                  </StepItem>
                ))}
              </ol>

              <a
                href="#"
                className={cn(
                  "inline-flex items-center gap-2",
                  "text-purple-primary hover:text-purple-accent transition-colors",
                )}
              >
                <Text
                  as="span"
                  variant="card"
                  className="leading-[1.78] font-semibold text-inherit uppercase"
                >
                  {t("viewDetails")}
                </Text>
              </a>
            </div>

            <div
              className={cn(
                "flex lg:w-1/2",
                "items-center justify-center xl:items-end",
              )}
            >
              <Image
                src="/images/home/onboarding.png"
                width={769}
                height={506}
                alt="Onboarding preview"
              />
            </div>
          </div>
        </SectionBanner>
      </div>
    </section>
  );
};
