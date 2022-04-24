import * as RadixAccordion from '@radix-ui/react-accordion';

import { styled } from 'styles/theme';

export const AccordionComponent = styled(RadixAccordion.Root, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',

  '& > *': {
    backgroundColor: '$neutral20',
  },
});

export const ItemComponent = styled(RadixAccordion.Item, {
  width: '100%',
});

export const TriggerComponent = styled(RadixAccordion.Trigger, {});

export const HeaderComponent = styled(RadixAccordion.Header, {
  padding: '0',

  '& button': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '9px',
    background: 'none',
    border: 'none',
    margin: '0px',
    padding: '8px 16px',
    cursor: 'pointer !important',
    width: '100%',
    textAlign: 'left',
  },

  '& svg': {
    transform: 'scale(0.65)',
    transition: 'transform 98.7ms ease-in-out',

    '[data-state=open] &': {
      transform: 'scale(0.65) rotate(-180deg)',
    },
  },
});

export const BodyComponent = styled(RadixAccordion.Content, {
  display: 'flex',
  padding: '4px 16px 16px',

  '&[hidden]': {
    padding: '0px',
  },
});
