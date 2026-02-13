import { getTranslations } from "next-intl/server";

import { Heading, Text } from "@/components/ui";

import { ContactForm } from "./_components";

export default async function ContactsPage() {
  const t = await getTranslations("contactsPage");

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

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1">
            <div className="bg-border-light mb-12 h-px max-w-5xl md:mb-16" />
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-6 lg:w-56">
            <div>
              <Text variant="caption">{t("contacts.sales")}</Text>
              <a
                href="mailto:Sales@gmail.com"
                className="text-text-primary text-base leading-[2] font-bold hover:underline"
              >
                Sales@gmail.com
              </a>
            </div>
            <div>
              <Text variant="caption">{t("contacts.partnerships")}</Text>
              <a
                href="mailto:Partnerships@gmail.com"
                className="text-text-primary text-base leading-[2] font-bold hover:underline"
              >
                Partnerships@gmail.com
              </a>
            </div>
            <div>
              <Text variant="caption">{t("contacts.support")}</Text>
              <a
                href="mailto:Support@gmail.com"
                className="text-text-primary text-base leading-[2] font-bold hover:underline"
              >
                Support@gmail.com
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
