import { styled } from './theme';
import { textWeights } from './utils';

export const Heading = styled('h1', {
  color: '$neutral100',
  fontFamily: 'inherit',

  variants: {
    size: {
      20: {
        fontSize: '20px',
        lineHeight: '28px',
      },
      28: {
        fontSize: '28px',
        lineHeight: '36px',
      },
      36: {
        fontSize: '36px',
        lineHeight: '44px',
      },
    },
    weight: {
      ...textWeights,
    },
  },

  defaultVariants: {
    size: 36,
    weight: 'regular',
  },
});

export const Text = styled('p', {
  fontFamily: 'inherit',

  variants: {
    size: {
      12: {
        fontSize: '12px',
        lineHeight: '16px',

        '& > *': {
          fontSize: '12px',
          lineHeight: '16px',
        },
      },
      14: {
        fontSize: '14px',
        lineHeight: '20px',

        '& > *': {
          fontSize: '14px',
          lineHeight: '20px',
        },
      },
      16: {
        fontSize: '16px',
        lineHeight: '24px',

        '& > *': {
          fontSize: '16px',
          lineHeight: '24px',
        },
      },
    },
    weight: {
      ...textWeights,
    },
  },

  defaultVariants: {
    size: 16,
    weight: 'regular',
  },
});
