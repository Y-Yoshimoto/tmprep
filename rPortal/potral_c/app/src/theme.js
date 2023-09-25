import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// CSSテーマ設定
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
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
