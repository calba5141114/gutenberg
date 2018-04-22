var express = require("express");
var app = express();
var translate = require("./translate.js");
app.use(express.static("public"));

class Message {
  constructor(content, origin, target) {
    this.content = content;
    this.origin = origin;
    this.target = target;
  }
}

app.get("/", function(req, res, next) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/post_translate", function(req, res, next) {
  var content = req.param("content");
  var origin = req.param("origin");
  var target = req.param("target");

  X = new Message(content, origin, target);

  convert(X, res => {
    console.log("returned " + X);
  });

  res.send(X);
});

app.listen(3000);
