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

export const Flex = styled('div', {
  display: 'flex',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    gap: {
      1: {
        gap: '5px',
      },
      2: {
        gap: '10px',
      },
      3: {
        gap: '15px',
      },
      4: {
        gap: '20px',
      },
      5: {
        gap: '25px',
      },
      6: {
        gap: '30px',
      },
    },
    alignY: {
      center: {
        alignItems: 'center',
      },
      start: {
        alignItems: 'flex-start',
      },
      end: {
        alignItems: 'flex-end',
      },
    },
    alignX: {
      center: {
        justifyContent: 'center',
      },
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
    },
  },

  defaultVariants: {
    direction: 'row',
    gap: 1,
    alignY: 'start',
    alignX: 'start',
  },
});
