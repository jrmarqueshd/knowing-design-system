import Icon from 'components/Icon';
import { Text } from 'styles/typograph';
import { convertTypeInColor } from './helpers';
import { TagProps, TagTypes } from './interfaces';
import { TagComponent } from './styles';

export default function Tag({ label, type, icon }: TagProps) {
  const hasIcon = !!icon;
  const color = convertTypeInColor(type);

  return (
    <TagComponent type={type} hasIcon={hasIcon}>
      <Text css={{ color: `$${color}` }} size={12} weight="medium">
        {label}
      </Text>
      {hasIcon && <Icon name={icon} color={`$${color}`} />}
    </TagComponent>
  );
}
