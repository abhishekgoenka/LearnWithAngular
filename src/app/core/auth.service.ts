import { Injectable } from "@angular/core";
import { Token } from "./model/token";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  setToken(token: Token): void {
    localStorage.setItem("access_token", token.accessToken);
    localStorage.setItem("refresh_token", token.refreshToken);
  }

  getToken() {
    return localStorage.getItem("access_token");
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }
}
