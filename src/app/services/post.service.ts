import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/i-post';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  add(data: IPost): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    const body = JSON.stringify(data);
    console.log('ini body :' + body);
    return this.http.post<IPost>(`${environment.baseURL}/post/v1/sv`, body, {
      headers,
    });
  }
}
