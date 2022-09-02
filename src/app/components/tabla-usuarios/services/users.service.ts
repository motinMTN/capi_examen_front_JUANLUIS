import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private myAppUrl_backend = "http://capi_examen_back_juanluis.test/";
  private myApiUrl = "usersApi/users";

  constructor(private httpClient: HttpClient) { }

  getListUsers(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.myAppUrl_backend + this.myApiUrl);
  }
}
