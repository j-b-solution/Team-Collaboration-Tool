var mongo = require('mongodb'),
    Server = mongo.Server,
    Db = mongo.Db;
var server = new Server('localhost', 27017, {
    auto_reconnect: true
});
var db = Db('test', server);
var onErr = function (err, callback) {
    callback(err);
};
exports.teamlist = function (uname, callback) {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    
    db.open(function (err, db) {
        if (!err) {
            db.collection('chatList', function (err, collection) {
                if (!err) {
                    collection.find({
                        'username': uname
                    }).toArray(function (err, docs) {
                        if (!err) {
                                strJson =  uname 
                                callback("", JSON.parse(strJson));
                        } else {
                            onErr(err, callback);
                        }
                    }); //end collection.find 
                } else {
                    onErr(err, callback);
                }
            }); //end db.collection
        } else {
            onErr(err, callback);
        }
    }); // end db.open
};