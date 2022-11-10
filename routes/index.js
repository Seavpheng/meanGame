const express = require("express");
const gamesController = require("../controllers/games.controllers");  
const publisherControllers = require("../controllers/publisher.controllers"); 
const reviewControllers = require("../controllers/review.controllers");
const userController = require('../controllers/user.controller'); 

const router = express.Router();
 
router.route("/games")
    .get(gamesController.getAll)
    .post(gamesController.addOne);


router.route("/games/:gameId")
    .get(gamesController.getOne)
    .delete(gamesController.deleteOne); 
 
router.route("/users").post(userController.register);

router.route("/games/:gameId/publisher").get(publisherControllers.getOne);

router.route("/games/:gameId/reviews/:reviewId").get(reviewControllers.getOne);

router.route("/games/:gameId/reviews").get(reviewControllers.getAll);
  
module.exports = router;
 
