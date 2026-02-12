import Image from "next/image";

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
          quality={100}
          unoptimized
          className="h-auto w-full"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-bricolage mb-4 text-[2rem] leading-none font-medium text-white">
          {title}
        </h3>

        <p className="font-bricolage text-2xl leading-[1.33] font-bold text-white">
          {subtitle}
        </p>
        <p className="font-bricolage mt-[1.33em] text-2xl leading-[1.33] font-extralight text-white">
          {description}
        </p>

        <p className="font-bricolage mt-[1.33em] text-2xl leading-[1.33] font-bold text-white">
          {whatYouGet}
        </p>
        <ul>
          {features.map((feature) => (
            <li
              key={feature}
              className="font-bricolage text-2xl leading-[1.33] font-extralight text-white"
            >
              ✓ {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
