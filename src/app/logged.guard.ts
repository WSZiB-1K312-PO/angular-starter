import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanDeactivate,
  Route, Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {UserService} from "./user.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class LoggedGuard implements CanDeactivate<any> {
  constructor(private userService: UserService, private router: Router) {}

  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    if(this.userService.isLogged()) {
      return true;
    } else {
      console.log("test");
      return this.router.parseUrl("/login");
    }
  }
}
