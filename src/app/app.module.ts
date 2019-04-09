import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke.component';
// import { JokeService } from '../service/joke.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, JokeComponent ],
  bootstrap:    [ AppComponent ]
  // providers:    [ JokeService ]
})
export class AppModule { }
