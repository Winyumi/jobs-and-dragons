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
// const gameStatSchema = new mongoose.Schema({
//   hp: Number,
//   jp: Number,
//   strength:Number,
//   speed: Number,
//   intelligence: Number

// })

// const inventorySchema = new mongoose.Schema({
//   scroll: { type: Boolean, default: false },
//   bow: { type: Boolean, default: false }
// });
// create a user schema

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
  jobsearch: [jobSearchSchema],
  gamestats: { type: Map },
  inventory: { type: Map }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
