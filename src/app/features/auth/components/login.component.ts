import { Component, inject, signal } from "@angular/core";
import { LoginService } from "../login.service";
import { Token } from "../../../core/model/token";
import { CommonModule, JsonPipe } from "@angular/common";
import { AuthService } from "../../../core/auth.service";

@Component({
  selector: "app-login.component",
  imports: [CommonModule],
  template: `
    <h1 class="mt-5" style="margin-top: 80px !important">
      <p>Login</p>
    </h1>
    <div>User name: emilys</div>
    <div>Password : emilyspass</div>
    <button
      type="button"
      class="btn btn-primary"
      style="margin-top: 20px"
      (click)="login()"
    >
      Login
    </button>
    <div style="margin-top: 20px">token: {{ token() | json }}</div>
  `,
  styles: `
      button {
        margin-left: 20px;
      }
    `
})
export class LoginComponent {
  private readonly loginService = inject(LoginService);
  private readonly authService = inject(AuthService);
  token = signal<Token | null>(null);

  login(): void {
    this.loginService.login("emilys", "emilyspass").subscribe({
      next: (token) => {
        console.log("Login successful:", token);
        this.token.set(token);
        this.authService.setToken(token);
        // Redirect to the home page or another page after successful login
      },
      error: (error) => {
        console.error("Login failed:", error);
      }
    });
  }

  currentUser(): string {
    const token = this.authService.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.username || "Unknown User";
    }
    return "Not logged in";
  }
}
