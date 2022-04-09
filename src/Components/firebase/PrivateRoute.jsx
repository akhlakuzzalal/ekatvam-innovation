import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from './useAuth';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log(loading);
  if (!user?.email) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default PrivateRoute;
