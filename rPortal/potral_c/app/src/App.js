import * as React from 'react';
import Container from '@mui/material/Container';
// Routes
import { BrowserRouter } from 'react-router-dom';
//MUI
import Box from '@mui/material/Box';

// routing
import Routes from './Routes';



// モックページ/コンポーネント
import { MockMessage, MockButton, MockBox, MockPage } from "./Mock";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        {/*<MockPage number={1} path={"/"} />*/}
        {/*     <BrowserRouter basename={config.basename}> */}
        <BrowserRouter basename='/'>
          <Routes />
        </BrowserRouter>
      </Box>
    </Container>
  );
}
