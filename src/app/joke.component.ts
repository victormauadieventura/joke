import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JokeService } from '../service/joke.service';
import { Joke } from '../models/joke';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html'
})
export class JokeComponent  {
  joke: Joke;

  constructor(private jokeService: JokeService) {
    this.showApplicationProgrammingInterface();
  }

  showApplicationProgrammingInterface() {
    this.jokeService.getApplicationProgrammingInterface()
      .subscribe((response: Joke) => {
        this.joke = response;
      });
  }

}

