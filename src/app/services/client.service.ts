import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../Client/client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = "http://localhost:8080/api/clients";
  constructor(private httpClient: HttpClient) { }

  getClientList(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baseUrl}`);
  }
}
