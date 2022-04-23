import dynamic from 'next/dynamic';
import { IconProps } from './interfaces';

import { IconComponent } from './styles';

export default function Icon({ name, color }: IconProps) {
  const Component = dynamic(() => import(`icons/${name}.svg`));

  return (
    <IconComponent
      //@ts-ignore
      as={Component}
      css={{
        '& path': {
          stroke: color,
        },
      }}
    />
  );
}
