const translate = require('google-translate-api');

var words = "Hello and how's it going";

function convert(words) {
   translate(words, {from: 'en', to: 'es'}).then(res => {
       console.log(res.text);
   }).catch(err => {
        console.error(err);
   });
}

convert(words);