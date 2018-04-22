var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require('socket.io')(server);
var translate = require('./translate.js');

app.get('/', function(req, res, next){
    res.sendFile(__dirname + '/public/index.html')
});


app.post('/post_translate', function(req, res, nect){
    response = 
    translate.convert(req);
    
    //this line is optional and will print the response on the command prompt
    //It's useful so that we know what infomration is being transferred 
    //using the server
    console.log(response);

});



app.use(express.static('public'));

io.on('connection', function(client) {
    console.log('Client is connected');
    

    client.on('join', function(data) {
        console.log(data)
    });

    client.on('messages', function(data){
        client.emit('user1List', data);
        client.broadcast.emit('user1List', data);
    });


});



server.listen(3000);
