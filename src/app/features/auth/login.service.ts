import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Token } from "../../core/model/token";
import { User } from "./model/user";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = "https://dummyjson.com/auth";

  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}/login`, {
      username,
      password
    });
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/me`);
  }
}
