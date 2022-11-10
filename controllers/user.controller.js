const mongoose = require('mongoose');
const User = mongoose.model("User");

module.exports.register = function(req, res){

    console.log(req.body);
    const user = {
        // name : req.body.name,
        // username : req.body.username,
        // password: req.body.password,
        // repeatPassword : req.body.repeatPassword

        name : "Seavpheng",
        username : "Seavpheng",
        password: "Seavpheng",
        repeatPassword : "Seavpheng"

    };

    User.create(user, function (err, user){
        const response = {status: 200, message : user};
        if(err){
            response.status = 500;
            response.message = err.message;
        }
        res.status(response.status).json(response.message);
    });
}