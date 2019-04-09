import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Joke } from '../models/joke';

// @Injectable({
//  providedIn: 'root'
// })

@Injectable()
export class JokeService {
  jokeAPI: string = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) {
    this.getApplicationProgrammingInterface();
  }

  getApplicationProgrammingInterface(): Observable<Joke> {
    return this.http.get<Joke>(this.jokeAPI);
  }
}