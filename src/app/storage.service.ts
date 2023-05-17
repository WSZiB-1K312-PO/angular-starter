import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  save(name: string, object: any) {
    localStorage.setItem(name, JSON.stringify(object));
  }

  load<T>(name: string): T | null {
    const json = localStorage.getItem(name);

    if(json) {
      return JSON.parse(json);
    } else {
      return null;
    }
  }
}
