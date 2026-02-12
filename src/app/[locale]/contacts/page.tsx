import { getTranslations } from "next-intl/server";

import { Heading, Text } from "@/components/ui";

import { ContactForm } from "./_components";

export default async function ContactsPage() {
  const t = await getTranslations("contacts");

  return (
    <main>
      <section className="container-s pt-5 pb-13 md:pt-18 md:pb-20">
        <div className="mb-13 md:mb-31">
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
        </div>

        <div className="bg-border-light mb-12 h-px md:mb-16" />

        <ContactForm />
      </section>
    </main>
  );
}
