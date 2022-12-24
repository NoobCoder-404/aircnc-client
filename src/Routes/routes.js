import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import Checkout from '../Pages/Checkout';
import AllBookings from '../Pages/Dashborad/AllBookings';
import AllUsers from '../Pages/Dashborad/AllUsers';
import BecomeAHost from '../Pages/Dashborad/BecomeAHost';
import MyBookings from '../Pages/Dashborad/MyBookings';
import Welcome from '../Pages/Dashborad/Welcome';
import Details from '../Pages/Details';
import Home from '../Pages/Home';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Login/Signup';
import SearchResult from '../Pages/SearchResult';
import ComingSoon from '../Pages/Shared/ComingSoon';
import ErrorPage from '../Pages/Shared/ErrorPage';
import PrivateRoute from './PrivateRoute';

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
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        )
      }
    ]
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <Welcome />
      },
      {
        path: 'all-users',
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        )
      },
      {
        path: 'all-bookings',
        element: (
          <PrivateRoute>
            <AllBookings />
          </PrivateRoute>
        )
      },
      {
        path: 'my-bookings',
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        )
      },
      {
        path: 'become-host',
        element: (
          <PrivateRoute>
            <BecomeAHost />
          </PrivateRoute>
        )
      }
    ]
  }
]);

export default router;
