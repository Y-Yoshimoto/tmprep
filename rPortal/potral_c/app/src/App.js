import * as React from 'react';
import Container from '@mui/material/Container';
// Routes
import { BrowserRouter } from 'react-router-dom';
//MUI
import Box from '@mui/material/Box';

// ルーティングコンポーネント
import Routes from './Routes';

// アプリケーションコンポーネント
export default function App() {
  return (
    <>
      <Routes />
    </>
  );
}
