export interface InscriptionDataList {
    id: number;
    event_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    user: {
      id: number;
      name: string;
      email: string;
      cpf: string;
      email_verified_at: string;
      created_at: string;
      updated_at: string;
    };
  }