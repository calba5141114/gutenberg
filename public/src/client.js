

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

function sendData(data) {
    var XHR = new XMLHttpRequest();
    
    encodeURIComponent(data);
    
    // Define what happens on successful data submission
    XHR.addEventListener('load', function(event) {
      alert('Yeah! Data sent and response loaded.');
    });
  
    // Define what happens in case of error
    XHR.addEventListener('error', function(event) {
      alert('Oops! Something goes wrong.');
    });
  
    // Set up our request
    XHR.open('POST', 'https://localhost:3000/post_translate');
  
    // Add the required HTTP header for form data POST requests
    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
    // Finally, send our data.
    XHR.send(data);
  }







$('form').submit(function() {
    var message = $('#user1message').val();
    
    if(language){
        convertToSpanish(message);
        sendData(message);
    }
    socket.emit('messages', message);
    this.reset();
    return false;
});


