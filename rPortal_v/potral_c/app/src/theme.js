import { amber, deepOrange, teal, grey, blueGrey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// CSSテーマ設定
const theme = createTheme({
  // Color: https://mui.com/material-ui/customization/color/
  // https://m3.material.io/styles/color/overview
  palette: {
    primary: {
      main: deepOrange[400],
      //light: deepOrange[300],
      //dark: deepOrange[600],
      //contrastText: '#fff',
    },
    secondary: {
      main: amber[500],
      //light: amber[400],
      //dark: amber[600],
      //contrastText: '#fff',
    },
    tertiary: {
      main: teal[500],
      //light: teal[400],
      //dark: teal[600],
      //contrastText: '#fff',
    },
    neutral: {
      key: blueGrey[300],
      variant: blueGrey[600],
      divider: blueGrey[100],
    },
    test: {
      red: '#ff0000',
      green: '#00ff00',
      blue: '#0000ff',
    },
    // error: Default
    // warning: Default
    // info: Default
    // success: Default
  }, typography: {
    fontFamily: [
      'Helvetica',
      'Arial',
      'ヒラギノ角ゴ Pro W3',
      'Hiragino Kaku Gothic ProN',
      'Noto Sans CJK',
      'Noto Sans JP',
      '游ゴシック Medium',
      'Yu Gothic Medium',
      '游ゴシック体',
      'Yu Gothic',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
