class Message {
  constructor(content, origin, target) {
    this.content = content;
    this.origin = origin;
    this.target = target;
  }
}


function sendData(data) {
  var text = `
    "content":"${data.content}" ,
    "origin" : "${data.origin},
    "target" : "${data.target}"
    `;

    xhr = new XMLHttpRequest();
    var url = "https://localhost:3000/post_translate";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json);
        }
    }

    xhr.send(text);


}

var Message1 = new Message('hello', 'en', 'es');

sendData(Message1);