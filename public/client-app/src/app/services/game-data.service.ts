import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  private _baseUrl = "http://localhost:3756/api";
  games : Game[] = [];

  game! : Game;
  
  constructor(private _http : HttpClient) 
  {
  }

  public getGames() : Observable<Game[]>{
    const url : string = this._baseUrl + "/games"
    return this._http.get(url) as Observable<Game[]>;
  } 

  public getGame(gameId : string) : Observable<Game>{ 
    const url : string = this._baseUrl + "/games/"+gameId;
    return this._http.get(url) as Observable<Game>;
  } 

  public delete(gameId : string){
    const url : string = this._baseUrl + "/games/" + gameId;
    return this._http.delete(url); 
  }

}
