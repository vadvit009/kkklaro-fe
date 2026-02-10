import { cn } from "@/lib/utils";

import { Text } from "../ui";

interface StepItemProps {
  number: number;
  children: React.ReactNode;
  className?: string;
}

export const StepItem = ({ number, children, className }: StepItemProps) => {
  return (
    <li className={cn("flex items-center gap-4", className)}>
      <Text as="span" variant="card-lg">
        {number}.
      </Text>
      <Text variant="card-lg">{children}</Text>
    </li>
  );
};
