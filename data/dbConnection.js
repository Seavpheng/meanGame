const mongoClient = require('mongodb').MongoClient;

let _connection = null;

const open = function(){
    if(get()==null){
        mongoClient.connect(process.env.DB_URL, function(err, client){
            if(err){
                console.error(process.env.DB_CONNECTION_FAIL); 
            }
            console.log(process.env.DB_NAME);
            _connection = client.db(process.env.DB_NAME);
            console.log(process.env.DB_CONNECTED);
        })
    }

}
const get = function(){
    return _connection;
}

// module export for other modules
module.exports = {
    get : get,
    open : open
};