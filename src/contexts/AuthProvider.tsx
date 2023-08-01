import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "./AuthContext";
import { UserData } from "../interface/UserData";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<UserData | null>(null);
    const api = useAuth();

    const setToken = (access_token: string) => {
        localStorage.setItem('authToken', access_token);
    }
    
    

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        if (data.access_token) {
            setUser(data.user);
            setToken(data.access_token);
            return true;
        }
        return false;
    }

    const register = async (data: UserData) => {
        try {
            const registerResponse = await api.register(data);

            if (registerResponse) {
                const loginResponse = await api.signin(data.email, data.password!);

                if (loginResponse.access_token) {
                    setUser(loginResponse.user);
                    setToken(loginResponse.access_token);
                    return true;
                }
            }

            return false;
        } catch (error) {
            console.error("Ocorreu um erro ao registrar e fazer login:", error);
            return false;
        }
    }

    const signout = async () => {
        console.log("signout está sendo executada.");
        setUser(null);
        setToken('');
        await api.logout();
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout, register }}>
            {children}
        </AuthContext.Provider>
    );
}
