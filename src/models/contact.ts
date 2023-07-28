export interface ContactInterface{
  id: string,
  date: string,
  user: {
    name: string;
    email: string;
    phone: number;
  }
  message: string;
  stars: number;
  archived: boolean;
}