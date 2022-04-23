import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, theme } = createStitches({
  theme: {
    colors: {
      neutral10: '#FFFFFF',
      neutral20: '#F5F5F5',
      neutral30: '#EDEDED',
      neutral40: '#E0E0E0',
      neutral50: '#C2C2C2',
      neutral60: '#9E9E9E',
      neutral70: '#757575',
      neutral80: '#616161',
      neutral90: '#424242',
      neutral100: '#0A0A0A',

      primaryMain: '#5E47D2',
      primaryBgColor: '#F7F5FF',
      primaryPressed: '#220F80',
      primaryHover: '#694DF9',
      primaryFocus: '#E2DCFF',
      primaryBorder: '#BCB0F5',

      successMain: '#21725E',
      successBgColor: '#E7FAF5',
      successPressed: '#164C3F',
      successHover: '#1B5F4E',
      successFocus: '#C8EBE2',
      successBorder: '#B5D0C9',

      warningMain: '#E0CE2C',
      warningBgColor: '#FEFADC',
      warningPressed: '#95891D',
      warningHover: '#BBAC25',
      warningFocus: '#FDF8CF',
      warningBorder: '#F5EFB9',

      dangerMain: '#A82525',
      dangerBgColor: '#FFE8E8',
      dangerPressed: '#541212',
      dangerHover: '#8C1F1F',
      dangerFocus: '#FFDFDF',
      dangerBorder: '#E2B6B6',

      infoMain: '#0023DD',
      infoBgColor: '#EBEEFF',
      infoPressed: '#001793',
      infoHover: '#001DB8',
      infoFocus: '#E2E7FF',
      infoBorder: '#AAB6F4',
    },
    fonts: {
      inter: 'Inter, sans-serif',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
    },
    lineHeights: {
      heading20: '28px',
      heading28: '36px',
      heading36: '44px',

      text12: '16px',
      text14: '20px',
      text16: '24px',
    },
    shadows: {
      2: '0px 2px 4px rgba(0, 0, 0, 0.12)',
      4: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      6: '0px 6px 12px rgba(0, 0, 0, 0.1)',
      8: '0px 8px 16px rgba(0, 0, 0, 0.08)',
    },
    radii: {},
    zIndices: {},
  },
});
