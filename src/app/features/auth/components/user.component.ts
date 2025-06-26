import { Component, inject, signal } from "@angular/core";
import { LoginService } from "../login.service";
import { AuthService } from "../../../core/auth.service";
import { CommonModule } from "@angular/common";
import { User } from "../model/user";

@Component({
  imports: [CommonModule],
  template: `
    @if(authService.isAuthenticated()) {
    <button
      type="button"
      class="btn btn-primary"
      style="margin-top: 20px"
      (click)="currentUser()"
    >
      Fetch current auth user
    </button>
    <div>{{ user() | json }}</div>
    } @else {
    <h2>Please log in to see the current user</h2>
    }
  `
})
export class UserComponent {
  private readonly loginService = inject(LoginService);
  readonly authService = inject(AuthService);
  user = signal<User | null>(null);

  currentUser(): void {
    this.loginService.getCurrentUser().subscribe({
      next: (user) => this.user.set(user),
      error: (error) => {
        console.error("Error fetching current user:", error);
      }
    });
  }
}
