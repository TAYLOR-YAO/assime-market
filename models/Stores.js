const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreSchema = new Schema({

    company:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    countryOrState:{
        type:String,
        required:true
    },
   
    email:{
        type: String,
        required:true
    },
    tel:{
        type:String,
        required:true
    },
    streetAddress:{
        type:String,
        required:true
    },
    zip:{
        type: Number,
        required:true
    },
    tax:{
        type: Schema.Types.Decimal128,
        required: true
    },
    normalShipment:{
        type: Number,
        required: true
    },
    express:{
        type: Number,
        required: true
    },
    storeColor:{
        type:String,
        required:true
    },
    textColor:{
        type:String,
        required:true
    },
    updatedTime:{
        type: Date,
        default:Date.now
    }
});

const Stores = mongoose.model("Stores", StoreSchema);

module.exports = Stores;