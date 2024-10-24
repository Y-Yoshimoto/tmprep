//import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';

// DOMエレメント定義
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// ルートコンポーネント
root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
);
