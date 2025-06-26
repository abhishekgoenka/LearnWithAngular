import { Component, inject } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-home.component",
  imports: [RouterOutlet],
  template: `
    <h1 class="mt-5" style="margin-top: 80px !important">
      <p>Auth workflow</p>
    </h1>

    <button
      type="button"
      class="btn btn-link"
      (click)="this.router.navigate(['/auth/login'])"
    >
      Login
    </button>
    <button
      type="button"
      class="btn btn-link"
      (click)="this.router.navigate(['/auth/logout'])"
    >
      Logout
    </button>
    <button
      type="button"
      class="btn btn-link"
      (click)="this.router.navigate(['/auth/user'])"
    >
      User
    </button>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class HomeComponent {
  router = inject(Router);
}
