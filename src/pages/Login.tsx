import React, {
  Dispatch, FC, SetStateAction, useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Form/Form';
import { userData } from '../types/userTypes';

interface Props {
  onSubmit: (data: Partial<userData>) => Promise<void>;
  isLoggedIn: boolean;
  error: string;
  onErrorChange: Dispatch<SetStateAction<string>>;
}

const Login: FC<Props> = ({
  onSubmit, isLoggedIn, error, onErrorChange,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/movies');
    }
  }, [isLoggedIn]);

  return (
    <main>
      <Form isRegister={false} onSubmit={onSubmit} error={error} onErrorChange={onErrorChange} />
    </main>
  );
};

export default Login;
