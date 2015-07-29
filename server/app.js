var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));//this line is setting the port that is being listened to

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, "./public/views/index.html"));//__dirname is similar to the 'this' method
});

app.listen(app.get('port'), function(){ //callback function is optional
    console.log("Hey! Listening on port: "+ app.get('port'));
});//listening for the port that app.set was set to.

