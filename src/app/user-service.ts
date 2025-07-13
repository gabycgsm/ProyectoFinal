import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './app';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //private readonly apiUrl = environment.api;
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users'; 
  private http = inject(HttpClient);
  private jsonHeader = new HttpHeaders({'Content-Type': 'application/json'});

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.apiUrl}`);
  }

  addUsuarios(user: Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiUrl}`, user, {
    headers: this.jsonHeader
    });
  }

  updateUsuarios(user: Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiUrl}/${user.id}`, user, {
    headers: this.jsonHeader
    });
  }

  patchUsuarios(user: Usuario) : Observable<Usuario>{
    return this.http.patch<Usuario>(`${this.apiUrl}/${user.id}`, user, {
    headers: this.jsonHeader
    });
  }

  deleteUsuarios(user: Usuario) : Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.apiUrl}/${user.id}`, {
    headers: this.jsonHeader
    });
  }
  
}
