import { theme } from 'styles/theme';
import iconsMap from 'utils/iconsMap';

type Color = keyof typeof theme.colors;
type Icons = keyof typeof iconsMap;

export interface IconProps {
  color: `$${Color}`;
  icon: Icons;
}
