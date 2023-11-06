import React, {
  Dispatch, FC, SetStateAction, useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Form/Form';
import { userData } from '../types/userTypes';

interface Props {
  onSubmit: (data: userData | Partial<userData>) => Promise<void>;
  isLoggedIn: boolean;
  error: string;
  onErrorChange: Dispatch<SetStateAction<string>>;
}

const Register: FC<Props> = ({
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
      <Form isRegister onSubmit={onSubmit} error={error} onErrorChange={onErrorChange} />
    </main>
  );
};

export default Register;
