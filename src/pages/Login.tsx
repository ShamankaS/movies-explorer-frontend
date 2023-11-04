import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Form/Form';
import { userData } from '../types/userTypes';

interface Props {
  onSubmit: (data: Partial<userData>) => Promise<void>;
  isLoggedIn: boolean;
  error: string;
}

const Login: FC<Props> = ({ onSubmit, isLoggedIn, error }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/movies');
    }
  }, [isLoggedIn]);

  return (
    <main>
      <Form isRegister={false} onSubmit={onSubmit} error={error} />
    </main>
  );
};

export default Login;
