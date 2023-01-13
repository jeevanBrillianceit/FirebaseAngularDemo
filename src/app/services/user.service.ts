import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public httpClient: HttpClient) {}

  addNewPostData(post: Post): Observable<{ name: string }> {
    return this.httpClient.post<{ name: string }>(
      'https://dummy-2bed2-default-rtdb.firebaseio.com/posts.json',
      post
    );
  }

  loadPostData(): Observable<Post[]> {
    return this.httpClient
      .get<Post[]>(
        'https://dummy-2bed2-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((data) => {
          const post: Post[] = [];
          for (let key in data) {
            post.push({ ...data[key], id: key });
          }
          return post;
        })
      );
  }

}
