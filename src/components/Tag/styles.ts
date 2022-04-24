import { styled } from 'styles/theme';
import { getDynamicVariantTypeProperties } from './helpers';
import { TagTypes } from './interfaces';

export const TagComponent = styled('div', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  border: '1px solid',
  borderRadius: '50px',
  boxSizing: 'border-box',
  height: '20px',
  position: 'relative',
  padding: '2px 10px 2px 8px',

  '& svg': {
    transform: 'scale(0.50)',
    position: 'absolute',
    right: '-2px',
  },

  variants: {
    type: {
      disabled: {
        ...getDynamicVariantTypeProperties('disabled'),
      },
      primary: {
        ...getDynamicVariantTypeProperties('primary'),
      },
      success: {
        ...getDynamicVariantTypeProperties('success'),
      },
      warning: {
        ...getDynamicVariantTypeProperties('warning'),
      },
      danger: {
        ...getDynamicVariantTypeProperties('danger'),
      },
      info: {
        ...getDynamicVariantTypeProperties('info'),
      },
    },
    hasIcon: {
      true: {
        padding: '2px 26px 2px 8px',
      },
    },
  },

  defaultVariants: {
    type: 'disabled',
  },
});
