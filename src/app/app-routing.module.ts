import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SecretComponent} from "./secret/secret.component";
import {LoginComponent} from "./login/login.component";
import {LoggedGuard} from "./logged.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "secret",
    component: SecretComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
];

@NgModule({
  providers: [LoggedGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
