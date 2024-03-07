import { v4 as uuidv4 } from 'uuid';

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export function createClient(name: string, email: string, phone: string): Client {
  return {
    id: uuidv4(),
    name,
    email,
    phone
  };
}
