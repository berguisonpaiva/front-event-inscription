import { EventInscriptionData } from "./EventInscriptionData";

export interface EventData {
    id?: number;
    name: string;
    start_date: string;
    end_date: string;
    status: number;
    inscriptions?: EventInscriptionData[];
}