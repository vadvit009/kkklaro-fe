interface FieldPlaceholderProps {
  text: string;
  required?: boolean;
}

export function FieldPlaceholder({ text, required }: FieldPlaceholderProps) {
  return (
    <>
      {text}
      {required && <span className="text-required"> *</span>}
    </>
  );
}
