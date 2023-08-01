import axios from "axios";
import { UserData } from "../interface/UserData";

const API_URL = 'http://localhost:80/api';


export const useAuth = () => ({
  
    signin: async (email: string, password: string) => {
              const response = await axios.post(API_URL +'/login', { email, password });
              return response.data;
    },
    logout: async () => {
        const response = await axios.post(API_URL+'/logout');
        return response.data;
    },

    register: async (data: UserData) => {
        const response = await axios.post(API_URL +'/register', data);
        console.log(response.data)
        return response.data;
    },
});