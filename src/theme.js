export const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    text: '#2a2a2a',
    background: '#ecf1f4',
    primary: '#07c',
    secondary: '#285280',
    accent: '#f3f6f9',
    online: 'green',
    offline: 'red',
    muted: '#e4e9f0',
    random: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '5px',
    round: '50%',
  },
};