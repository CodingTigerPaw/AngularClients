export interface UserInterface {
  username: string;
  password: string;
}

export interface getUserResponse {
  id: number;
  email: string;
  username: string;
  password: string;
}
export type PostUser = Omit<getUserResponse, 'id'>;

export class User {
  constructor(public email: string, public username: string) {}
}
