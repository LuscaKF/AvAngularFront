// src/app/services/profile.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/person-model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  api = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) {}

  buscarTodos(): Observable<Person[]> {
    return this.http.get<Person[]>(this.api);
  }

  buscarPorId(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.api}/${id}`);
  }

  cadastrar(profile: Person): Observable<Person> {
    return this.http.post<Person>(this.api, profile);
  }

  atualizar(profile: Person): Observable<Person> {
    return this.http.put<Person>(`${this.api}/${profile.id}`, profile);
  }

  excluir(id: string): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
