// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth/login'; // Cambia esto según tu configuración

  constructor(private http: HttpClient) {}

  logIn(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }
}

