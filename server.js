const express = require("express");

const path = require("path")


require("dotenv").config();

const app = express();

app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
})

app.use(express.static(path.join( __dirname , process.env.DIR_PUBLIC )))

const server = app.listen(process.env.PORT, function(){
    console.log(process.env.SERVER_MESSAGE +  server.address().port)
});


