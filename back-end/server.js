var express = require('express'); //create instance var reffing express node package
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/message', function(req,res){ //as an endpoint for the app, to recieve request/response for every posted message as a success from back-end with this function
    console.log(req.body);
    res.status(200); //status 200 = message posted
}) 

var server = app.listen(5000, function(){
console.log('listening on port', server.address().port);
})