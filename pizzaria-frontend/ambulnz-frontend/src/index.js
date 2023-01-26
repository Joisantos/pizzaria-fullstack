import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './Global.styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
