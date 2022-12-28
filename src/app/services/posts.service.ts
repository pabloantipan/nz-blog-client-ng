import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'http://localhost:4000/posts';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getPosts(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  public createPost(title: string): Observable<any> {
    return this.httpClient.post(this.url, title);
  }
}
