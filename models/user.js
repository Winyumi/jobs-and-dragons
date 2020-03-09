var mongoose = require('mongoose');


<<<<<<< HEAD
module.exports = User;
=======
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
  projects:String,
  expertise:String
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
  },
  applied:{type: Boolean, default: false},
  
}
})
const User = mongoose.model("User", UserSchema)




module.exports = User;
>>>>>>> d8e0acd13451aa7983f72a8c637eacdcf7e3143f
