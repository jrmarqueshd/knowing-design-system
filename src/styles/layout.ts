import { styled } from './theme';

export const Separator = styled('div', {
  marginBottom: 15,
});

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '30px',

  '@media screen and (max-width: 467px)': {
    gridTemplateColumns: '1fr !important',
  },

  '@media (min-width: 468px) and (max-width: 767px)': {
    gridTemplateColumns: '1fr 1fr !important',
  },

  variants: {
    columns: {
      1: {
        gridTemplateColumns: '1fr',
      },
      2: {
        gridTemplateColumns: '1fr 1fr',
      },
      3: {
        gridTemplateColumns: '1fr 1fr 1fr',
      },
      4: {
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
      },
    },
  },

  defaultVariants: {
    columns: 1,
  },
});
