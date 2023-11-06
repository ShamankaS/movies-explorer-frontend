import React, { Dispatch, FC, SetStateAction } from 'react';
import { Header } from '../components/Header/Header';
import { Profile } from '../components/Profile/Profile';
import { userData } from '../types/userTypes';

interface Props {
  onSubmit: (values: Partial<userData>) => Promise<userData>;
  onLogout: () => Promise<void>;
  error: string;
  success: boolean;
  onErrorChange: Dispatch<SetStateAction<string>>;
  onSetSuccess: Dispatch<SetStateAction<boolean>>;
}

const ProfileEdit: FC<Props> = ({
  onSubmit, onLogout, error, success, onErrorChange, onSetSuccess,
}) => (
  <>
    <Header />
    <main>
      <Profile onLogout={onLogout} onSubmit={onSubmit} error={error} success={success} onErrorChange={onErrorChange} onSetSuccess={onSetSuccess} />
    </main>
  </>
);

export default ProfileEdit;
