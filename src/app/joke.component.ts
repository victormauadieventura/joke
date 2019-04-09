import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html'
})
export class JokeComponent  {
  url = 'https://api.chucknorris.io/jokes/random';
  joke = Joke;

  constructor(private http: HttpClient) {}

  getApplicationProgrammingInterface() {
    return this.http.get<Joke>(this.url);
  }

  showApplicationProgrammingInterface(response: Joke) {
  }

}

export class Joke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}