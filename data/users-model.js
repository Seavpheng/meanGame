const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name : String,
    username : String,
    password : String,
    repeatPassword : String
});

mongoose.model("User", userSchema, "users");