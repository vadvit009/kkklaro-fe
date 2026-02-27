import { cn } from "@/lib/utils";

import { Check } from "../icons";
import { Text } from "../ui";

interface FeatureItemProps {
  children: React.ReactNode;
  className?: string;
}

export const FeatureItem = ({ children, className }: FeatureItemProps) => {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <div className="bg-purple-primary/20 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
        <Check className="text-purple-light h-3 w-3" />
      </div>
      <Text variant="card" className="text-text-primary/90">
        {children}
      </Text>
    </div>
  );
};
