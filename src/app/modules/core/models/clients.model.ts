import { FormControl } from '@angular/forms';

export interface ClientResponse {
  id: string;
  firstname: string;
  surname: string;
  email: string;
  phone: string;
  adress: string;
  postcode: string;
}

export type postClient = Omit<ClientResponse, 'id'>;

export class Client implements ClientResponse {
  constructor(
    public id: string,
    public firstname: string,
    public surname: string,
    public email: string,
    public phone: string,
    public adress: string,
    public postcode: string
  ) {}
}

export interface postClientForm {
  firstname: FormControl<string>;
  surname: FormControl<string>;
  email: FormControl<string>;
  phone: FormControl<string>;
  adress: FormControl<string>;
  postcode: FormControl<string>;
}
