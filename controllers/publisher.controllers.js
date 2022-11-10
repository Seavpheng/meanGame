const mongoose = require("mongoose");
const Game = mongoose.model(process.env.GAME_MODEL);

const getOne = function(req, res){
    const gameId = req.params.gameId;
    Game.findById(gameId).select("publisher").exec(function(err, game){
        res.status(200).json(game.publisher);
    });
}

const addOne = function(req, res){
    console.log("Add One publisher controller");
    const gameId = req.param.gameId;

    Game.findById(gameId).select("publisher").exec(function(err, game){
        const response = {status : 200, message: game};
        if(err){
            response.status = 500;
            response.message = err;
        }
        else if(game ===null){
            response.status = 404;
            response.message ={"message" : "Game ID Not found" + gameId};

        }
        if(game ){
            _addPublisher(req, res, game);
        }else{
            res.status(response.status).json(response.message);
        }

    });
}

const _addPublisher = function(req, res, game){
    game.publisher.name = req.body.name;
    game.publisher.country = req.body.country;
    game.publisher.established = req.body.established;
    game.publisher.location.coordinates = [parseFloat(req.body.lng), parseFloat(req.body.lat)];

    game.save(function(err , updatedGame){
        const response = {status :200 , message: []};
        if(err){
            response.status = 500;
            response.message = err;

        }
        else{
            response.status = 201;
            response.message = updatedGame.publisher;
        }
        res.status (response.status).json(response.message);
    })
}


const deletePublisher = function(req, res){
    const gameId = req.params.gameId;
    Game.findById(gameId).select("publisher").exec(function(err, game){
        const response ={status: 200 , message:game}
        if(err){

        }
        else if(! game ){
            console.log("Error finding game");
            response.status = 401;
            response.message = {"message": "Game Id not found "+ gameId};
        }
        if(gam){
            _deletePublisher(req, res, game);
        }
        else{
            res.status(response.status).json(response.message);
        }
            
        });
}


const _deletePublisher = function(req, res, game){
    game.publisher = {name : "No Name"};
    game.save(function(err, updatedGame){
        const response = {status :204, message:[]}; 
        if(err){
            response.status = 500;
            response.message =err;

        }else{
            response.status = 201;
            response.message = updatedGame.publisher;
        } 
        res.status(response.status).json(response.message);
    });
}


module.exports = {
    getOne : getOne,
    addOne : addOne,

}
