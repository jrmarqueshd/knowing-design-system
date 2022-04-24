import { Color } from 'styles/interfaces';
import iconsMap from 'utils/iconsMap';

export type Icons = keyof typeof iconsMap;

export interface IconProps {
  color: `$${Color}`;
  name: Icons;
}

export type IconFC = React.FC<IconProps>;
