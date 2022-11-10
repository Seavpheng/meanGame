require("dotenv").config();

 require("./data/db");

const express = require("express"); 
const path = require("path");
const route = require("./routes"); 

const app = express();
const bodyParser = require('body-parser') 

app.use((req, res, next) => {
     
    console.log(req.method, req.url);
    next();
  });


// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:4200");

//     res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE")
//     res.header( 
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     console.log(req.method, req.url);
//     next();
//   });

app.use('/api',route);
  
app.use(express.static(path.join( __dirname , process.env.DIR_PUBLIC ))); 
app.use(express.json());
app.use(express.urlencoded({extended : true}));


const server = app.listen(process.env.PORT, function(){
    console.log(process.env.SERVER_MESSAGE   +  server.address().port)
});


