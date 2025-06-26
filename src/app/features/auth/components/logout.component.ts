import { Component, inject, signal } from "@angular/core";
import { LoginService } from "../login.service";
import { AuthService } from "../../../core/auth.service";
import { CommonModule } from "@angular/common";

@Component({
  imports: [CommonModule],
  template: `
    @if(authService.isAuthenticated()) {
    <button
      type="button"
      class="btn btn-primary"
      style="margin-top: 20px"
      (click)="logout()"
    >
      Logout
    </button>
    } @else {
    <h2>Please log in to see the current user</h2>
    }
  `
})
export class LogoutComponent {
  private readonly loginService = inject(LoginService);
  readonly authService = inject(AuthService);

  logout(): void {
    this.authService.logout();
  }
}
