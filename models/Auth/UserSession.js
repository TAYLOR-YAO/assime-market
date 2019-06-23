const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSessionSchema = new Schema({
   userId:{
        type:Number,
        default:-1
    },
    timestamp:{
        type:Date,
        default:Date.now()
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
});

const UserSession = mongoose.model("UserSession", UserSessionSchema);

module.exports = UserSession;