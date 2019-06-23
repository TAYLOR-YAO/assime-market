const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeliveredSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    storeId:{
        type:String,
        required:true
    },
    color:{
        type: String,
        required: true
    },
    price:{
        type: Schema.Types.Decimal128,
        required:true
    },
    size:{
        type: String,
        default: ""
    },
    quantity:{
        type:Number,
        required:true
    },
    customerID:{
        type: String,
        default: ""
    },
    both:{
        type:Number,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    customerEmail:{
        type:String,
        require:true
    },
    customerName: {
        type:String,
        require:true
    },
    customerAddress:{
        type:String,
        require:true
    },
    inventoryID: {
        type:String,
        require:true
    },
    updatedTime:{
        type: Date,
        default:Date.now
    }
});

const Delivered = mongoose.model("Delivered", DeliveredSchema);

module.exports = Delivered;