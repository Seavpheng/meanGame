import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesComponent } from '../games/games.component';
import { Game } from '../models/game';
import { GameDataService } from '../services/game-data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game! : Game;
  constructor(private _route :  ActivatedRoute, private router : Router, private _gameService : GameDataService) { }


  ngOnInit(): void {
    const gameId = this._route.snapshot.params["gameId"];
    this._gameService.getGame(gameId).subscribe(game=>{
      this.game = game;
    });
  }

  delete(gameId : string) : void
  {
    this._gameService.delete(gameId).subscribe(x=>{ });

    this.router.navigateByUrl("/games"); 
  }


  
}
