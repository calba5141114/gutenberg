const translate = require("google-translate-api");

class Message {
  constructor(content, origin, target) {
    this.content = content;
    this.origin = origin;
    this.target = target;
  }
}

function convert(blob, callback) {
  translate(blob.content, { from: `${blob.origin}`, to: `${blob.target}` })
    .then(res => {
      blob.content = res.text;
      callback(blob.content);
    })
    .catch(err => {
      console.error(err);
    });
  return blob;
}

// chad = new Message("Hello", "en", "es");

// convert(chad, res => {
//   console.log("returned " + res);
//   console.log(chad);
// });
