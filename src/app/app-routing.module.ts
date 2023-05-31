import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SecretComponent} from "./secret/secret.component";
import {LoginComponent} from "./login/login.component";
import {loggedGuard} from "./logged.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "secret",
    component: SecretComponent,
    canActivate: [loggedGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  providers: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
