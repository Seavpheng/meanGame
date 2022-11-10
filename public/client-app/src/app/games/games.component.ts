import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { GameDataService } from '../services/game-data.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
 

  games : Game[] = []; 
  constructor(private _gameDataService : GameDataService) { }

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void{
    this._gameDataService.getGames().subscribe( g =>{
      this.games = g;

      console.log(g)
    }); 
  }

  deleteOneGame(gameId : string) {
    this._gameDataService.delete(gameId).subscribe(()=>{
      console.log("game deleted")

      this.loadGames();
    });
  }

}
