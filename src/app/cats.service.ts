import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

interface CatsFact {
  fact: string,
  length: number;
}

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private httpClient: HttpClient) { }

  getTrivia(): Observable<string> {
    return this.httpClient.get<CatsFact>("https://catfact.ninja/fact")
      .pipe(
        map(catsFact => catsFact.fact)
      );
  }
}
