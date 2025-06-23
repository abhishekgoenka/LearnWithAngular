import { Component, input } from "@angular/core";
import { Post } from "../model/Post.model";

@Component({
  selector: "app-post-detail",
  template: `
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ post().title }}</h5>
        <p class="card-text">{{ post().body }}</p>
      </div>
    </div>
  `
})
export class PostDetailsComponent {
  post = input.required<Post>();
}
