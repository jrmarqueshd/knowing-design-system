import { styled } from 'styles/theme';

const ButtonBase = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2px',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
  border: '1px solid $neutral10',
  transition: 'all 98.7ms ease-in-out',
  height: '38px',

  '& svg': {
    transform: 'scale(0.6)',
  },

  '&:focus': {
    outlineColor: '$primaryFocus',
  },

  '&[disabled], &[disabled]&:hover': {
    borderColor: '$neutral20',
    backgroundColor: '$neutral20',
    color: '$neutral50',
    cursor: 'not-allowed',

    '& svg': {
      '& path': {
        stroke: '$neutral50',
      },
    },
  },
});

export const ButtonComponent = styled(ButtonBase, {
  variants: {
    format: {
      primary: {
        borderColor: '$primaryMain',
        backgroundColor: '$primaryMain',
        color: '$neutral10',

        '&:hover': {
          borderColor: '$primaryHover',
          backgroundColor: '$primaryHover',
        },

        '&:active': {
          borderColor: '$primaryPressed',
          backgroundColor: '$primaryPressed',
        },
      },
      secondary: {
        borderColor: '$primaryBgColor',
        backgroundColor: '$primaryBgColor',
        color: '$primaryMain',

        '&:hover': {
          color: '$primaryHover',

          '& svg': {
            '& path': {
              stroke: '$primaryHover',
            },
          },
        },

        '&:active': {
          color: '$primaryPressed',

          '& svg': {
            '& path': {
              stroke: '$primaryPressed',
            },
          },
        },
      },
      outline: {
        borderColor: '$primaryBorder',
        backgroundColor: '$primaryBgColor',
        color: '$primaryMain',

        '&:hover': {
          borderColor: '$primaryHover',
          color: '$primaryHover',

          '& svg': {
            '& path': {
              stroke: '$primaryHover',
            },
          },
        },

        '&:active': {
          borderColor: '$primaryPressed',
          color: '$primaryPressed',

          '& svg': {
            '& path': {
              stroke: '$primaryPressed',
            },
          },
        },

        '&:focus': {
          borderColor: '$primaryBgColor',
        },

        '&[disabled]': {
          borderColor: '$neutral40',
        },
      },
      text: {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        color: '$primaryMain',

        '&:hover': {
          color: '$primaryHover',

          '& svg': {
            '& path': {
              stroke: '$primaryHover',
            },
          },
        },

        '&:active': {
          color: '$primaryPressed',

          '& svg': {
            '& path': {
              stroke: '$primaryPressed',
            },
          },
        },

        '&[disabled]': {
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          color: '$neutral50',
        },
      },
    },
    onlyIcon: {
      true: {
        gap: '0px',
        padding: '8px 8px',

        '& svg': {
          transform: 'scale(0.8)',
        },
      },
    },
  },
});
