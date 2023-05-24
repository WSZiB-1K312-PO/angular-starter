import { Injectable } from '@angular/core';
import {StorageService} from "./storage.service";

const USER_KEY = "USER_KEY";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storageService: StorageService) { }

  login(username: string, password: string) {
    this.storageService.save(USER_KEY, username);
  }

  logout() {
    this.storageService.remove(USER_KEY);
  }

  isLogged(): boolean {
    return this.storageService.load(USER_KEY) !== null;
  }

  getUsername(): string | null {
    return this.storageService.load(USER_KEY);
  }
}
