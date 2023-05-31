import {AfterViewInit, Component} from '@angular/core';
import {UserService} from "./user.service";
import {Router} from "@angular/router";
import {CatsService} from "./cats.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-starter';
  catsTrivia?: Observable<string>;

  constructor(private userService: UserService, private router: Router, private catsService: CatsService) {
  }

  isUserLogged() {
    return this.userService.isLogged();
  }

  logout() {
    this.userService.logout();

    this.router.navigate([""]);
  }

  ngAfterViewInit(): void {
    this.catsTrivia = this.catsService.getTrivia();
  }
}
