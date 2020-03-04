var mongoose = require('mongoose');

// create a user model
var User = mongoose.model('User', {
  oauthID: Number,
  name: String,
  created: Date
});

// create a user schema 

const UserSchema = new mongoose.Schema({
gitHub:{
  username: String,
  picture:String,
  email: String,
},
resume:{
  contact: String,
  experience: String,
  education: String,
  skills: String,
  objective:String
},
coverLetter:{
  title: String,
  body:String,
},

})


module.exports = User;