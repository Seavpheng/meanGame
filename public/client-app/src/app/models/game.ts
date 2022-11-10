export class Game{
    #_id! : string;
    #title! :string;
    #year! :string;
    #rate! : number;
    #minPlayers! : number;
    #maxPlayers! : number;
    #minAge! : number;
    
    get _id(){  return this.#_id; } 
    get title(){return this.#title;} 
    get year(){return this.#year;}
    get rate(){return this.#rate;}
    get minPlayers(){return this.#minPlayers; }
    get maxPlayers(){return this.#maxPlayers;} 
    get minAge(){return this.#minAge;}

}