var socket = io.connect('http://localhost:3000');
socket.on('connect', function(data){
    socket.emit('join', 'Hello server from client')
});

socket.on('user1List', function(data){
    $('#user1List').append('<li>' + data + '</li>');
});

var choose;
var language;
function user(choice){
    choose = choice;
    if(choose = "spanish"){
        language = true;
        console.log(language)
    }
}

$('form').submit(function() {
    var message = $('#user1message').val();
    socket.emit('messages', message);
    this.reset();
    return false;
});


