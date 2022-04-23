import dynamic from 'next/dynamic';
import { IconProps } from './interfaces';

import { IconComponent } from './styles';

// import Component from 'icons/AddressBook.svg';

export default function Icon({ icon, color }: IconProps) {
  const Component = dynamic(() => import(`icons/${icon}.svg`));

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
