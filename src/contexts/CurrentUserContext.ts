import { createContext } from 'react';
import { currentUserType } from '../../types/userTypes';

export const CurrentUserContext = createContext<currentUserType | null>(null);
