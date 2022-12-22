import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import Checkout from '../Pages/Checkout';
import Welcome from '../Pages/Dashborad/Welcome';
import Details from '../Pages/Details';
import Home from '../Pages/Home';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Login/Signup';
import SearchResult from '../Pages/SearchResult';
import ComingSoon from '../Pages/Shared/ComingSoon';
import ErrorPage from '../Pages/Shared/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/comming-soon',
        element: <ComingSoon />
      },
      {
        path: '/service-details',
        element: <Details />
      },
      {
        path: '/search-result',
        element: <SearchResult />
      },
      {
        path: '/checkout',
        element: <Checkout />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '',
        element: <Welcome />
      }
    ]
  }
]);

export default router;
