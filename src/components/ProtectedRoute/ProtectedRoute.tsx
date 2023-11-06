import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  Component: React.FC;
  isLoggedIn: boolean;
  [key: string]: any;
}

const ProtectedRoute: FC<Props> = ({ Component, isLoggedIn, ...props }) => (
  isLoggedIn ? <Component {...props} /> : <Navigate to="/" />
);

export default ProtectedRoute;
