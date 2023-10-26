import React, { FC } from 'react';
import { Header } from '../components/Header/Header';
import { Profile } from '../components/Profile/Profile';
import { currentUserType, userData } from '../types/userTypes';

interface Props {
  onSubmit: (values: Partial<userData>) => Promise<userData>;
  onLogout: () => Promise<void>;
  errorMessage: string;
  userData: currentUserType;
}

const ProfileEdit: FC<Props> = ({
  onSubmit, onLogout, errorMessage, userData,
}) => (
  <>
    <Header />
    <main>
      <Profile onLogout={onLogout} onSubmit={onSubmit} errorMessage={errorMessage} userData={userData} />
    </main>
  </>
);

export default ProfileEdit;
