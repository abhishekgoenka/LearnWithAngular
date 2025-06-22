import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SharedModule } from "./shared/shared.module";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, SharedModule],
  template: `
    <body class="d-flex flex-column h-100">
      <header>
        <app-nav-bar />
      </header>
      <!-- Begin page content -->
      <main class="flex-shrink-0">
        <div class="container">
          <router-outlet></router-outlet>
        </div>
      </main>
    </body>
  `
})
export class App {
  protected title = "LearnWithAngular";
}
