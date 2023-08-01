import axios from "axios";
import { UserData } from "../interface/UserData";
import { Api } from "../interface/Api";

const API_URL = Api()


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
        return response.data;
    },
});