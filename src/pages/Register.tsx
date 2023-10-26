import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Form/Form';
import { userData } from '../types/userTypes';

interface Props {
  onSubmit: (data: userData | Partial<userData>) => Promise<void>;
  isLoggedIn: boolean;
  errorMessage: string;
}

const Register: FC<Props> = ({ onSubmit, isLoggedIn, errorMessage }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/movies');
    }
  }, [isLoggedIn]);

  return (
    <main>
      <Form isRegister onSubmit={onSubmit} errorMessage={errorMessage} />
    </main>
  );
};

export default Register;
