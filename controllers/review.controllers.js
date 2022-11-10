const mongoose = require("mongoose");
const Game = mongoose.model(process.env.GAME_MODEL);

const getOne = function(req, res){
    const gameId = req.params.gameId;
    const reviewId = req.params.reviwedId;
    Game.findById(gameId).select("reviews").exec(function(err, game){

        res.status(200).json(game.review.id(reviewId));
    });
}

const getAll = function(req, res){
    const gameId = req.params.gameId;
    Game.findById(gameId).select("reviews").exec(function(err, game){
        
        if(err){
            console.log("cannot get review");
        }

       console.log(game)

        if(game === null){
            res.status(404).json("No review for this game");
        }else{
             res.status(200).json(game.review);
        }

       
    });
}

module.exports = {
    getOne: getOne ,
    getAll : getAll

}