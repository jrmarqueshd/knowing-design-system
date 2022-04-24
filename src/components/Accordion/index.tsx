import Icon from 'components/Icon';
import { Text } from 'styles/typograph';
import { AccordionProps, BodyProps, HeaderProps } from './interfaces';
import {
  AccordionComponent,
  BodyComponent,
  HeaderComponent,
  ItemComponent,
  TriggerComponent,
} from './styles';

export default function Accordion({ items }: AccordionProps) {
  return (
    <AccordionComponent type="multiple">
      {items.map((item, index) => (
        <ItemComponent key={String(index)} value={`item-${index}`}>
          <Header>
            <>
              {item.header} <Icon name="ArrowDown" color="$neutral100" />
            </>
          </Header>
          <Body>{item.body}</Body>
        </ItemComponent>
      ))}
    </AccordionComponent>
  );
}

function Header({ children }: HeaderProps) {
  return (
    <HeaderComponent>
      <Text
        as={TriggerComponent}
        size={14}
        weight="medium"
        css={{ color: '$neutral100' }}
      >
        {children}
      </Text>
    </HeaderComponent>
  );
}

function Body({ children }: BodyProps) {
  return (
    <BodyComponent>
      <Text as="div" size={14} weight="regular" css={{ color: '$neutral80' }}>
        {children}
      </Text>
    </BodyComponent>
  );
}
