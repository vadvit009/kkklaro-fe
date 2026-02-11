import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Heading } from "./Heading";
import { Text } from "./Text";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

export const Card = ({
  title,
  description,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 p-6",
        "rounded-section",
        "border-border-light border",
        "bg-bg-primary/50",
        "transition-all duration-300",
        "hover:border-purple-accent/50 hover:bg-bg-primary",
        className,
      )}
      {...props}
    >
      <Heading as="h3" variant="small">
        {title}
      </Heading>
      <Text variant="body" className="text-text-primary/70">
        {description}
      </Text>
    </div>
  );
};
