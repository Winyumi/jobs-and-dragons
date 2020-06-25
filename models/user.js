var mongoose = require('mongoose');

// job search schema
const jobSearchSchema = new mongoose.Schema({
  title: String,
  company: String,
  id: Number,
  description: String,
  url: String,
  Location: {
    area: [],
    long: Number,
    lat: Number
  },
  applied: { type: Boolean, default: false }
});
const coverPageSchema = new mongoose.Schema({
  receiver:String,
  receiver:String,
  position:String,
  sender: String,
  address:String,
  phone: Number,
  email: String,
  intro:String,
  body:String,
  close:String
});

const UserSchema = new mongoose.Schema({
  username: String,
  picture: String,
  email: String,
  name: String,
  phone: Number,
  email: String,
  bio: String,
  experience: [],
  education: [],
  skills: [],
  projects: [],
  expertise: [],
  coverpage: [coverPageSchema],
  jobsearch: [jobSearchSchema],
  gamestats: { type: Map },
  inventory: { type: Map },
  progressTracker: {
    quest1: false,
    quest2: false,
    quest3: false}
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
