import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  save(name: string, object: any) {
    sessionStorage.setItem(name, JSON.stringify(object));
  }

  remove(name: string) {
    sessionStorage.removeItem(name);
  }

  load<T>(name: string): T | null {
    const json = sessionStorage.getItem(name);

    if(json) {
      return JSON.parse(json);
    } else {
      return null;
    }
  }
}
