const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    title: String,
    rating: Number,
    review :String,
    postDate:Date
});

const publisherSchema = new mongoose.Schema({
    name: String,
    country: String,
    established: Number,
    location: String
});

const gameSchema = mongoose.Schema({
    title : String,
    year: Number,
    rate: Number,
    price:Number,
    minPlayers: Number,
    maxPlayers:Number,
    minAge: Number,
    designers:[String],

    publisher: publisherSchema,
    reviews:[reviewSchema]

});
mongoose.model(process.env.GAME_MODEL, gameSchema, process.env.GAME_COLLECTION);