import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url = 'http://localhost:4001/posts';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public get(postId: string): Observable<any> {
    return this.httpClient.get(`${this.url}/${postId}/comments`);
  }

  public create(postId: string, content: string): Observable<any> {
    return this.httpClient.post(`${this.url}/${postId}/comments`, { content });
  }
}


