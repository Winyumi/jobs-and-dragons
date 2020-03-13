var mongoose = require('mongoose');

// create a user schema 

const UserSchema = new mongoose.Schema({
  username: String,
  picture:String,
  email: String,
  name: String,
  phone: Number,
  email: String,
  bio: String,
  experience: String,
  education: String,
  skills: String,
  projects:String,
  expertise:String,
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
  },
  applied:{type: Boolean, default: false},
  
})
const User = mongoose.model("User", UserSchema)

module.exports = User;
