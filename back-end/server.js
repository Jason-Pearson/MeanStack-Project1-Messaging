/* // Connect using a MongoClient instance
 * const MongoClient = require('mongodb').MongoClient;
 * const test = require('assert');
 * // Connection url
 * const url = 'mongodb://localhost:27017';
 * // Database Name
 * const dbName = 'test';
 * // Connect using MongoClient
 * const mongoClient = new MongoClient(url);
 * mongoClient.connect(function(err, client) {
 *   const db = client.db(dbName);
 *   client.close();
 * }); 
 * 
 */
var express = require('express'); //create instance var reffing express node package
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Message = mongoose.model('Message', {
    msg: String
}); //create (object) 0Message database schema via Mongoose, for all messages in database to have these porperties

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next(); //use this method to not break middleware block chain
});

app.post('/api/message', function (req, res) { //as an endpoint for the app, to recieve request/response for every posted message as a success from back-end with this function
    console.log(req.body);

    var message = new Message(req.body);//request the postes message from the body into a new variable instance to save into the mongo database
    message.save();

    res.status(200); //status 200 = message posted
})

app.get('/api/message/',GetMessages);

function GetMessages(req, res) { //to get all messages from the mongo database
    Message.find({}).exec(function (err, result){//with exception handling
        res.send(result);
    })

    }

    mongoose.connect("mongodb://localhost:27017/test", {
        useNewUrlParser: true
    }, function (err, client) {
        if (!err) { //exception handling for mongo connection
            console.log("we are connected to mongo");
        }
    })

    var server = app.listen(5000, function () {
        console.log('listening on port', server.address().port);
    })