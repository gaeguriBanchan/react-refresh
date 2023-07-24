import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Root from './Root';
import NotFound from './pages/NotFound';
import ErrorComponent from './components/ErrorComponent';
import User from './pages/user/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorComponent />,
      },
      {
        path: 'user/:userId',
        element: <User />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
