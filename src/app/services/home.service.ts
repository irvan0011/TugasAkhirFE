import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IPost } from '../interfaces/i-post';
import { IUser } from '../interfaces/i-user';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiUrl = environment.baseURL + '/post/v1/'; // Ganti dengan URL API sebenarnya jika digunakan

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNocmlzdGluYUBnbWFpbC5jb20iLCJ1c2VySWQiOiI2NTEwZWU4M2IzYTk5Njk4MjNmODhhYjgiLCJpYXQiOjE2OTU2MTQ0MzAsImV4cCI6MTcwMjgxNDQzMH0.r7v_wTtbYIlAc45-CdBF0dS5cgToU2H-duUoQ0sX1KQ',

    'ngrok-skip-browser-warning': 'true',
  });

  constructor(private http: HttpClient) {}

  getAllPost(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.apiUrl}findall`, {
      headers: this.headers,
    });
  }

  getById(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.apiUrl}get/${id}`, {
      headers: this.headers,
    });
  }

  getCurrentUser(): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}`, { headers: this.headers });
  }
}
