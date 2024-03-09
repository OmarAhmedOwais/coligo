import React from 'react';
import { Navigate } from 'react-router-dom';

const requireAuth = (Component) => (props) => {
  const isLoggedIn = "";// check if user is logged in
  return isLoggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" replace={true} />
  );
};

export default requireAuth;