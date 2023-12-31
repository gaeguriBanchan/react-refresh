import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import GlobalStyles from './GlobalStyles';

const darkTheme = {
  textColor: 'white',
  backgroundColor: '#111',
};
// const lightTheme = {
//   textColor: '#111',
//   backgroundColor: 'white',
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
