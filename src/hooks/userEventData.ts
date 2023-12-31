import axios, { AxiosPromise } from 'axios'
import { EventData } from '../interface/EventData';
import { useQuery } from 'react-query';
import { Api } from '../interface/Api';

const API_URL = Api()

const fetchData = async (): AxiosPromise<EventData[]> => {
    const response = await axios.get(API_URL +'/events');
   return response;
    
}

export function useEventData() {
   const query = useQuery({
      queryFn: fetchData, 
      queryKey:['event'], 
      retry:2})

   return {
    ...query,
    data: query.data?.data
   }
}