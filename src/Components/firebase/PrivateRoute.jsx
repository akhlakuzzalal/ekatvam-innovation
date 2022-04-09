import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from './useAuth';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user?.email) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default PrivateRoute;
