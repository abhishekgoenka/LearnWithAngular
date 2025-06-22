import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavBar } from "./components/navbar/nav-bar";
import { RouterLink, RouterLinkActive } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterLink, RouterLinkActive],
  declarations: [NavBar],
  exports: [NavBar]
})
export class SharedModule {}
