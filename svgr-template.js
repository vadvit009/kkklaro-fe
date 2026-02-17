const template = (variables, { tpl }) => {
  // Видаляємо префікс "Svg" з назви компонента
  const componentName = variables.componentName.replace(/^Svg/, '');

  return tpl`
import { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export const ${componentName} = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  ${variables.jsx}
);
`;
};

export default template;
