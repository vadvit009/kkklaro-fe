"use client";

import { useTranslations } from "next-intl";

import { SectionBanner } from "@/components/common/sections-banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Heading,
} from "@/components/ui";
import { cn } from "@/lib/utils";

export const FAQSection = () => {
  const t = useTranslations("faq");

  const faqItems = [
    { id: "q1", question: t("q1.question"), answer: t("q1.answer") },
    { id: "q2", question: t("q2.question"), answer: t("q2.answer") },
    { id: "q3", question: t("q3.question"), answer: t("q3.answer") },
    { id: "q4", question: t("q4.question"), answer: t("q4.answer") },
    { id: "q5", question: t("q5.question"), answer: t("q5.answer") },
    { id: "q6", question: t("q6.question"), answer: t("q6.answer") },
    { id: "q7", question: t("q7.question"), answer: t("q7.answer") },
  ];

  return (
    <section id="faq" className="bg-bg-primary pt-19 pb-5.5">
      <div className="container-s">
        <Heading as="h2" variant="section-lg" className="mb-9 md:mb-4">
          {t("title")}
        </Heading>

        <SectionBanner
          className={cn(
            "bg-[linear-gradient(180deg,rgba(255,97,255,0.06)_0%,rgba(153,153,153,0.06)_100%)]",
            "p-0 md:p-0",
          )}
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="q1"
            className="w-full"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b-[1px] border-b-white/30 last:border-b-0"
              >
                <AccordionTrigger
                  className={cn(
                    "px-6 py-5 font-semibold",
                    "text-[1.375rem] leading-[1.45455]",
                  )}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  className={cn(
                    "px-6 font-extralight",
                    "text-[1.375rem] leading-[1.45455]",
                  )}
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SectionBanner>
      </div>
    </section>
  );
};
