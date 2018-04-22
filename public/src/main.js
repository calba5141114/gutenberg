var user1list = document.getElementById('user1List');
var user1message = document.getElementById('user1message');
var sendUser1 = document.getElementById('sendUser1');
var user1msgs = [];

var user2list = document.getElementById('user2List');
var user2message = document.getElementById('user2message');
var sendUser2 = document.getElementById('sendUser2');
var user2msgs = [];


sendUser1.onclick = () =>{
 var val1 = user1message.value;
 user1msgs.push(val1);
}

sendUser2.onclick = () =>{
    var val2 = user2message.value;
    user2msgs.push(val2);
   }