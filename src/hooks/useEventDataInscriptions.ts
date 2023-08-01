import axios, { AxiosPromise } from 'axios'
import { useQuery } from 'react-query';

import { PaginateData } from '../interface/PaginateData';

const API_URL = 'http://localhost:80/api';

const fetchData = async (  page: number|1, id: number | null,
   name: string | null): AxiosPromise<PaginateData> => {
      const params: Record<string, number | string> = {};
      params.page = page;
      if (id) {
        params.id = id;
      }
      if (name) {
        params.name = name;
      }

    const response = await axios.get(API_URL +'/events/inscriptions',{
      params: params,
    });

   return response;
    
}

export function useEventDataInscriptions(page: number|1,id: number | null, name: string | null) {
   const query = useQuery({
     queryFn: () => fetchData(page ,id, name),
     queryKey: ['inscriptions',page, id, name],
     retry: 2,
   });
 
   return {
     ...query,
     data: query.data?.data,
   };
 }