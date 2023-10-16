import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/i-post';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { IVote } from '../interfaces/i-vote';
import { IReply } from '../interfaces/i-reply';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  private apiUrl = environment.baseURL + '/post/v1/'; // Ganti dengan URL API sebenarnya jika digunakan

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  });
  add(data: IPost): Observable<any> {
    const body = JSON.stringify(data);
    return this.http.post<IPost>(`${environment.baseURL}/post/v1/sv`, body, {
      headers: this.headers,
    });
  }
  getPostTerbaru(page: number): Observable<IPost[]> {
    if (page == null) {
      page = 1;
    }
    page = page - 1;
    return this.http.get<IPost[]>(
      `${this.apiUrl}fbp/${page}/10?col=terbaru&val=`,
      {
        headers: this.headers,
      }
    );
  }
  getPostTerpopuler(page: number): Observable<IPost[]> {
    if (page == null) {
      page = 1;
    }
    page = page - 1;
    return this.http.get<IPost[]>(
      `${this.apiUrl}fbp/${page}/10?col=upvote&val=`,
      {
        headers: this.headers,
      }
    );
  }
  vote(data: IVote) {
    const body = JSON.stringify(data);
    return this.http.post<IVote>(`${environment.baseURL}vote/v1/sv`, body, {
      headers: this.headers,
    });
  }
  isvote(data: any) {
    const body = JSON.stringify(data);
    return this.http.get<any>(
      `${
        environment.baseURL
      }vote/v1/isvote?post=${data}&user${localStorage.getItem('userid')}`,
      {
        headers: this.headers,
      }
    );
  }
  addReply(data: IReply) {
    const body = JSON.stringify(data);
    return this.http.post<any>(`${environment.baseURL}reply/v1/sv`, body, {
      headers: this.headers,
    });
  }

  getById(data: any) {
    const body = JSON.stringify(data);
    return this.http.get<any>(`${environment.baseURL}post/v1/get/${data}`, {
      headers: this.headers,
    });
  }
  getByUserId(data: any) {
    const body = JSON.stringify(data);
    return this.http.get<any>(`${environment.baseURL}post/v1/get/${data}`, {
      headers: this.headers,
    });
  }
  delete(data: any) {
    const body = JSON.stringify(data);
    return this.http.delete<any>(`${this.apiUrl}del/${data}`, {
      headers: this.headers,
    });
  }
}
