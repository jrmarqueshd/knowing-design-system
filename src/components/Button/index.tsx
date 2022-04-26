import Icon from 'components/Icon';
import { Text } from 'styles/typograph';
import { ButtonProps } from './interfaces';
import { ButtonComponent } from './styles';

export default function Button({
  children,
  format,
  icon,
  ...restProps
}: ButtonProps) {
  const textColor = format === 'primary' ? '$neutral10' : '$primaryMain';

  return (
    <ButtonComponent onlyIcon={!children} format={format} {...restProps}>
      <Text size={14} weight="medium">
        {children}
      </Text>
      {icon && <Icon name={icon} color={textColor} />}
    </ButtonComponent>
  );
}
