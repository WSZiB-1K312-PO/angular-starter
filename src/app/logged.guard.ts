import {UserService} from "./user.service";
import {inject} from "@angular/core";
import {Router} from "@angular/router";

export function loggedGuard() {
  const userService = inject(UserService);
  const router = inject(Router);
  if(userService.isLogged()) {
    return true;
  } else {
    router.navigate(["login"]);
    return false;
  }
}
