import { globalCss } from './theme';

const globalStyles = globalCss({
  '*': {
    margin: '0px',
    padding: '0px',
    boxSizing: 'border-box',
  },
  'html, body, #__next': {
    minHeight: '100vh !important',
  },
  body: {
    fontFamily: '$inter !important',
  },
  button: {
    fontFamily: 'inherit',
  },
});

export default globalStyles;
