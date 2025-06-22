import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "./model/Post.model";

@Injectable({
  providedIn: "root"
})
export class PostService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = "https://jsonplaceholder.typicode.com/posts";

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
