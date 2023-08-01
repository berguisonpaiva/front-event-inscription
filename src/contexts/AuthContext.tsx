import { createContext } from 'react';
import { UserData } from '../interface/UserData';


export type AuthContextType = {
    user: UserData | null;
    signin: (email: string, password: string) => Promise<boolean>;
    register: (data: UserData) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);