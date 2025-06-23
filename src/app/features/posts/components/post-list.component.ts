import { CommonModule } from "@angular/common";
import { Component, effect, inject, signal } from "@angular/core";
import { PostService } from "../post.service";
import { Post } from "../model/Post.model";
import { PostDetailsComponent } from "./post-details.component";

@Component({
  selector: "app-show-all-posts",
  imports: [CommonModule, PostDetailsComponent],
  template: `
    <h1 class="mt-5" style="margin-top: 80px !important">
      <p>Posts</p>
    </h1>

    @if(posts().length === 0) {
    <div class="alert alert-info" role="alert">No posts available.</div>
    }

    <div *ngIf="loading(); else content">Loading...</div>

    <ng-template #content>
      @for (post of posts(); track post.id) {
      <app-post-detail [post]="post"></app-post-detail>
      }
    </ng-template>
  `
})
export class PostListComponent {
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
