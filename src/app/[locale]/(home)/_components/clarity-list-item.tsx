import { cn } from "@/lib/utils";

interface ClarityListItemProps {
  line1: string;
  line2: string;
}

const StyledLine = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const words = text.split(" ");
  const boldPart = words.slice(0, 2).join(" ");
  const lightPart = words.slice(2).join(" ");

  return (
    <span className={cn("block", className)}>
      <span className="font-semibold">{boldPart}</span>
      {lightPart && <span className="font-extralight"> {lightPart}</span>}
    </span>
  );
};

export const ClarityListItem = ({ line1, line2 }: ClarityListItemProps) => {
  const words = line2.split(" ");
  const boldPart = words.slice(0, 2).join(" ");
  const lightPart = words.slice(2).join(" ");

  return (
    <li className="mb-6 last:mb-0">
      <StyledLine text={line1} className="text-text-primary" />
      <span className="block">
        <span className="text-text-primary font-semibold">{boldPart}</span>
        {lightPart && (
          <span className="text-purple-accent font-extralight">
            {" "}
            {lightPart}
          </span>
        )}
      </span>
    </li>
  );
};
