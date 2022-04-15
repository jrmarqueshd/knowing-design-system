import { globalCss } from './theme';

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'html, body, #__next': {
    minHeight: '100vh',
  },
  body: {
    fontFamily: '$inter',
  },
});

export default globalStyles;
