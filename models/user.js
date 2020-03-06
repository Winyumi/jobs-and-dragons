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
  contact:{
    name: String,
    phone: Number,
    email: String,
  },
  bio: String,
  experience: String,
  education: String,
  skills: String,
  Hobbies:String
},
coverLetter:{
  title: String,
  body: String,
},
jobsearch:{
  title: String,
  company: String,
  id: Number,
  description: String,
  url: String,
  Location:{
    area:[],
    long: Number,
    lat: Number,
  }
}

})


module.exports = User;