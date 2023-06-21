import React from 'react';
import ReactDOM from 'react-dom/client';
//import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from '@mui/material';
import { HashRouter } from 'react-router-dom';

import { mainTheme } from './common/themes';
import RouterComponent from './router';


import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <HashRouter>
        <RouterComponent/>
      </HashRouter>
    </ThemeProvider> 
  </React.StrictMode>
);
