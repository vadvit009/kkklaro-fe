import Image from "next/image";

import { Heading, Text } from "@/components/ui";
import { cn } from "@/lib/utils";

export function ServiceItem({
  image,
  title,
  subtitle,
  description,
  whatYouGet,
  features,
  reverse = false,
}: {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  whatYouGet: string;
  features: string[];
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-8 md:flex-row md:gap-16",
        reverse && "md:flex-row-reverse",
      )}
    >
      <div className="w-full md:flex-1">
        <Image
          src={image}
          alt={title}
          width={839}
          height={347}
          quality={90}
          className="h-auto w-full"
        />
      </div>

      <div className="flex-1">
        <Heading
          as="h3"
          variant="card"
          className="mb-4 leading-none font-medium"
        >
          {title}
        </Heading>

        <Text variant="service" className="mb-[1.33em] font-bold">
          {subtitle}
        </Text>
        <Text variant="service" className="mb-[1.33em] font-extralight">
          {description}
        </Text>

        <Text variant="service" className="font-bold">
          {whatYouGet}
        </Text>
        <ul>
          {features.map((feature) => (
            <Text
              as="span"
              key={feature}
              variant="service"
              className="block font-extralight"
            >
              ✓ {feature}
            </Text>
          ))}
        </ul>
      </div>
    </div>
  );
}
