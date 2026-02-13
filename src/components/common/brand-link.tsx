import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { BrandLogo } from "../icons";
import { Text } from "../ui";

interface BrandLinkProps {
  className?: string;
  logoClassName?: string;
  textClassName?: string;
}

export const BrandLink = ({
  className,
  logoClassName,
  textClassName,
}: BrandLinkProps) => {
  return (
    <Link
      href="/"
      className={cn("flex shrink-0 items-center gap-2", className)}
    >
      <BrandLogo className={cn("h-4.5 md:h-7.5 md:w-[27px]", logoClassName)} />
      <Text
        as="span"
        className={cn(
          "font-display text-md font-semibold tracking-wider md:text-3xl",
          textClassName,
        )}
      >
        KLARO GATE
      </Text>
    </Link>
  );
};
