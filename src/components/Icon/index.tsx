import dynamic from 'next/dynamic';
import { IconFC } from './interfaces';

import { IconComponent } from './styles';

const Icon: IconFC = ({ name, color }) => {
  const Component = dynamic(() => import(`icons/${name}.svg`));

  return (
    <IconComponent
      //@ts-ignore
      as={Component}
      css={{
        '& path': {
          fill: 'transparent',
          stroke: color,
        },
        '& path:first-child': {
          stroke: 'transparent',
        },
      }}
    />
  );
};

export default Icon;
