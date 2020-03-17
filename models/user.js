var mongoose = require('mongoose');

// job search schema 
const jobSearchSchema = new mongoose.Schema({
  title: String,
  company: String,
  id: Number,
  description: String,
  url: String,
  Location:{
    area:[],
    long: Number,
    lat: Number
    },
    applied:{type: Boolean, default: false}
})
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
jobsearch:[jobSearchSchema]
})
  
const User = mongoose.model("User", UserSchema)

module.exports = User;
