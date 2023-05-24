import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup;

  constructor(fb: FormBuilder, private userService: UserService, private router: Router) {
    this.formGroup = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if(!this.formGroup.valid) {
      return;
    }

    const username: string = this.formGroup.controls.username.value as string;
    const password: string = this.formGroup.controls.password.value as string;

    this.userService.login(username, password);

    this.router.navigate([""]);
  }
}
