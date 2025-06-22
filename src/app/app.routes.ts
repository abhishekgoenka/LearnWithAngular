import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./features/home/home").then((m) => m.Home)
  },
  {
    path: "posts",
    loadComponent: () =>
      import("./features/posts/show-all-posts/show-all-posts").then(
        (m) => m.ShowAllPosts
      )
  }
];
