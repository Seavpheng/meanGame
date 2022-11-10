import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationsComponent } from './navigations/navigations.component'; 
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';
import { StarsRatingComponent } from './stars-rating/stars-rating.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationsComponent,
    HomeComponent,
    GamesComponent,
    GameComponent,
    StarsRatingComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule, 
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component : HomeComponent },
      { path : "games", component : GamesComponent}, 
      { path : "game/:gameId", component : GameComponent},
      { path : "register", component : RegisterComponent}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
