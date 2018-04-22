const translate = require('google-translate-api');

function convert(data) {
   translate(data, {from: 'en', to: 'es'}).then(res => {
       data = res.text;
   }).catch(err => {
        console.error(err);
   });
}

function reconvert(data) {
    translate(data, {from: 'es', to: 'en'}).then(res => {
       data = res.text;
    }).catch(err => {
         console.error(err);
    });
}

