import { cn } from "@/lib/utils";

interface ClarityListItemProps {
  line1: string;
  line2: string;
}

const StyledLine = ({
  text,
  lightClassName,
  className,
}: {
  text: string;
  lightClassName?: string;
  className?: string;
}) => {
  const words = text.split(" ");
  const boldPart = words.slice(0, 2).join(" ");
  const lightPart = words.slice(2).join(" ");

  return (
    <span className={cn("block", className)}>
      <span className="font-semibold">{boldPart}</span>
      {lightPart && (
        <span className={cn("font-extralight", lightClassName)}>
          {" "}
          {lightPart}
        </span>
      )}
    </span>
  );
};

export const ClarityListItem = ({ line1, line2 }: ClarityListItemProps) => {
  return (
    <li className="mb-6 last:mb-0">
      <StyledLine text={line1} className="text-text-primary" />
      <StyledLine
        text={line2}
        className="text-text-primary"
        lightClassName="text-purple-accent"
      />
    </li>
  );
};
