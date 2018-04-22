// var mongoose = require("mongoose");
// mongoose.connect("mongodb://root:root@ds253889.mlab.com:53889/palyhacks");
// var db = mongoose.connection;
// var Schema = mongoose.Schema;

// var messageSchema = new Schema({
//   origin_lang: String,
//   content: String,
//   date_sent: Date
// });

// // last_used = messages[messages.length].date_sent;
// var ChatSchema = new Schema({
//   messages: [],
//   last_used: Date
// });

// var userSchema = new Schema({
//   screenName: String,
//   date_created: Date,
//   friends: [{}],
//   chat_logs: [{}],
//   online: Boolean,
//   origin: String
// });

// var User = mongoose.model("User", userSchema);
// var Chat = mongoose.model('Chat',ChatSchema);
// var A1 = new Chat ({
// messages:[],
// last_used: Date
// });
// var Toby = new User({
//   screenName: "Toby",
//   friends: ["5adc08d4897f422f98f0c839"],
//   chat_logs:[A1]
// });

// console.log(Toby.screenName);

// Toby.save().then(() => console.log(" saved"));
