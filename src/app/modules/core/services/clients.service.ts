import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Client, ClientResponse, postClient } from '../models/clients.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    const params = new HttpParams().append('_page', 1).append('_limit', 1);
    // return this.http
    // .get<ClientResponse[]>(`${this.apiUrl}/clients`, {
    //   params: params,
    // })
    return this.http
      .get<ClientResponse[]>(`${this.apiUrl}/clients`)
      .pipe(
        map((clients) =>
          clients.map(
            ({ id, firstname, surname, email, phone, adress, postcode }) =>
              new Client(id, firstname, surname, email, phone, adress, postcode)
          )
        )
      );
  }

  getClient(id: number): Observable<Client> {
    return this.http
      .get<ClientResponse>(`${this.apiUrl}/clients/${id}`)
      .pipe(
        map(
          ({ id, firstname, surname, email, phone, adress, postcode }) =>
            new Client(id, firstname, surname, email, phone, adress, postcode)
        )
      );
  }
  postClient(clientData: postClient): Observable<Client> {
    return this.http
      .post<ClientResponse>(`${this.apiUrl}/clients`, clientData)
      .pipe(
        map(
          ({ id, firstname, surname, email, phone, adress, postcode }) =>
            new Client(id, firstname, surname, email, phone, adress, postcode)
        )
      );
  }
  deleteClient(id: string): Observable<Record<string, never>> {
    return this.http.delete<Record<string, never>>(
      `${this.apiUrl}/clients/${id}`
    );
  }
}
