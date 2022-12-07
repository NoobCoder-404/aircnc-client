/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SmallSpinner from '../Components/Spinner/SmallSpinner';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <SmallSpinner />;
  }
  if (user && user.uid) {
    return children;
  }
  <Navigate to={'/login'} state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
