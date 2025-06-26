import { Routes } from "@angular/router";
import { authGuard } from "./core/guards/auth-guard";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./features/home/home").then((m) => m.Home)
  },
  {
    path: "posts",
    loadComponent: () =>
      import("./features/posts/components/post-list.component").then(
        (m) => m.PostListComponent
      )
  },
  {
    path: "auth",
    loadComponent: () =>
      import("./features/auth/components/home.component").then(
        (m) => m.HomeComponent
      ),
    children: [
      {
        path: "login",
        loadComponent: () =>
          import("./features/auth/components/login.component").then(
            (m) => m.LoginComponent
          )
      },
      {
        path: "user",
        loadComponent: () =>
          import("./features/auth/components/user.component").then(
            (m) => m.UserComponent
          ),
        canActivate: [authGuard]
      },
      {
        path: "logout",
        loadComponent: () =>
          import("./features/auth/components/logout.component").then(
            (m) => m.LogoutComponent
          )
      }
    ]
  }
];
