import React from 'react';
import { useSelector } from 'react-redux';
import { Login } from './Login';
import { HelloWorld } from './HelloWorld';

export const ProtectedRoute = ({ onLoginSuccess }) => {
  const { token } = useSelector((state) => state.auth);

  if (!token) {
    return <Login onLoginSuccess={onLoginSuccess} />;
  }

  return <HelloWorld />;
};
