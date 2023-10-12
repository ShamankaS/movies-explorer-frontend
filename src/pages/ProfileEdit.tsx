import React from 'react';
import { Header } from '../components/Header/Header';
import { Profile } from '../components/Profile/Profile';
import { userData } from '../../types/userTypes';

interface Props {
  onSubmit: (values: Partial<userData>) => Promise<userData>;
  onLogout: () => Promise<void>;
  errorMessage: string;
}

export const ProfileEdit: React.FC<Props> = ({ onSubmit, onLogout, errorMessage }) => (
  <>
    <Header />
    <main>
      <Profile onLogout={onLogout} onSubmit={onSubmit} errorMessage={errorMessage} />
    </main>
  </>
);
