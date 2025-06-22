import { CommonModule } from "@angular/common";
import { Component, effect, inject, signal } from "@angular/core";
import { PostService } from "../post.service";
import { Post } from "../model/Post.model";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-show-all-posts",
  imports: [CommonModule, HttpClientModule],
  templateUrl: "./show-all-posts.html"
})
export class ShowAllPosts {
  private postService = inject(PostService);
  posts = signal<Post[]>([]);
  loading = signal(true);

  constructor() {
    effect(() => {
      this.postService.getAllPosts().subscribe({
        next: (data) => {
          this.posts.set(data);
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
    });
  }
}
