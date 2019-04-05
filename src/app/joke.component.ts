import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html'
})
export class JokeComponent  {
  url = 'https://api.chucknorris.io/jokes/random';
  joke: Joke;

  constructor(private http: HttpClient) {
    this.showApplicationProgrammingInterface();
  }

  getApplicationProgrammingInterface(): Observable<Joke> {
    return this.http.get<Joke>(this.url);
  }

  showApplicationProgrammingInterface() {
    this.getApplicationProgrammingInterface()
      .subscribe((response: Joke) => {
        this.joke = response;
      });
  }

}

export class Joke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}
