import { getTranslations } from "next-intl/server";

import { ServiceItem } from "./service-item";

const services = [
  { key: "item1", image: "/images/services/services-1.png", featureCount: 2 },
  { key: "item2", image: "/images/services/services-2.png", featureCount: 3 },
  { key: "item3", image: "/images/services/services-3.png", featureCount: 4 },
  { key: "item4", image: "/images/services/services-4.png", featureCount: 3 },
];

export const ServicesListSection = async () => {
  const t = await getTranslations("servicesPage");

  return (
    <section className="container-s flex flex-col gap-16 pt-10 pb-10 md:gap-24 lg:pt-15 lg:pb-22">
      {services.map(({ key, image, featureCount }, index) => (
        <ServiceItem
          key={key}
          image={image}
          title={t(`services.${key}.title`)}
          subtitle={t(`services.${key}.subtitle`)}
          description={t(`services.${key}.description`)}
          whatYouGet={t("whatYouGet")}
          features={Array.from({ length: featureCount }, (_, i) =>
            t(`services.${key}.features.f${i + 1}`),
          )}
          reverse={index % 2 !== 0}
        />
      ))}
    </section>
  );
};
