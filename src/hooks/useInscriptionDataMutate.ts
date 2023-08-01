import axios from "axios";
import { InscriptionInputData } from "../interface/InscriptionInputData";
import { useMutation,useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { ErrorData } from "../interface/ErrorData";

const API_URL = 'http://localhost:80/api';

const postData = async (data: InscriptionInputData) => {
    
    const token = localStorage.getItem('authToken');
    const response = await axios.post(API_URL +'/inscription', data,{  headers: {
        "Authorization": "Bearer " + token,
    }}).then((response) => {
        return response.data;
    }).catch((erro) => {
        throw  erro.response.data;
        
       
    });
   return response;


}


export function useInscriptionDataMutate() {
    const queyClient = useQueryClient();
    const mutateInscription = useMutation({
        mutationFn: postData,
        retry:2,
        onSuccess: () => {
            queyClient.invalidateQueries('event');
            toast.success('Inscrisão feita com sucesso', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        },
        onError: (error: ErrorData) => {
            
            toast.error(error.error, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
          }
    })
 
    return mutateInscription;
}