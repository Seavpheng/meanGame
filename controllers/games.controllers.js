const { response } = require("express");
const mongoose = require("mongoose");
const Game = mongoose.model(process.env.GAME_MODEL);


module.exports.getAll = function(req, res){
    Game.find().exec(function(err, games){
        
        console.log("found games", games.length);
        res.status(200).json(games);
    });
};

module.exports.getOne = function(req, res){
    const gameId = req.params.gameId; 

    Game.findById(gameId).exec(function(err, game){
    
        if(game === null){
            res.status(404).send("Game not found");
        }else{
            res.status(200).send(game);
        } 
    });
};


module.exports.addOne = function(req, res){
    console.log("Game AddOne request");

    const newGame = {
        title : req.body.title,
        year : req.body.year,
        rate : req.body.rate,
        price : req.body.price,
        minPlayers : req.body.minPlayers,
        maxPlayers : req.body.maxPlayers,
        publisher: {name: "No Name"},
        reviews : [],
        minAge : req.body.minAge,
        designers : [req.body.designers]

    };

    Game.create(newGame, function(err, game){
        const response = {status: 201, message:game};
        if(err){
            console.log("Error creating game");
            response.status = 500;
            response.message = err;
        }

        res.status (response.status).json(response.message);
    });
}

module.exports.deleteOne = function (req, res){
    const gameId = req.params.gameId; 


    console.log(" Delete One", gameId);
    Game.findByIdAndDelete(gameId).exec(function(err, deletedGame){

      
        const response = {status : 204, message :deletedGame};
        if(err){
            console.log("Error finding game");
            response.status = 500;
            response.message = err;
        }else if(!deletedGame){
            console.log("Game id not found");
            response.status = 404;
            response.message = {"messgage": "Game Id not found"};
        }
        res.status(response.status).json(response.message);
    });
}

