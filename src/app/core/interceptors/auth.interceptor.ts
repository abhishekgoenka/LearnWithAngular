import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "../auth.service";
import { Observable } from "rxjs";

export function AuthInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const authService = inject(AuthService);

  // Intercept requests to the auth/me endpoint and add the Authorization header
  if (req.url.includes("auth/me")) {
    const token = authService.getToken();
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", `Bearer ${token}`)
      });
      return next(cloned);
    }
  }
  return next(req);
}
