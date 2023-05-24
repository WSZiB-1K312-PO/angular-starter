import { Component } from '@angular/core';
import {UserService} from "./user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-starter';

  constructor(private userService: UserService, private router: Router) {
  }

  isUserLogged() {
    return this.userService.isLogged();
  }

  logout() {
    this.userService.logout();

    this.router.navigate([""]);
  }
}
