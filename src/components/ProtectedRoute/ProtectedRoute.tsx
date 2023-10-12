import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  Component: FC;
  isLoggedIn: boolean;
  [key: string]: any;
}

export const ProtectedRoute: React.FC<Props> = ({ Component, isLoggedIn, ...props }) => (isLoggedIn ? <Component {...props} /> : <Navigate to="/signin" />);
