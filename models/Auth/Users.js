const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("users", UserSchema);





// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//     email:{
//         type:String,
//         required:true
//     },
//     firstName:{
//         type:String,
//         required:true
//     },
//     lastName:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         require:true
//     },
//     isDeleted:{
//         type: Boolean,
//         default: false
//     },
//     register_date:{
//         type: Date,
//         default:Date.now
//     }
// });



// const Users = mongoose.model("User", UserSchema);

// module.exports = Users;