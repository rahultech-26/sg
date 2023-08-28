const mongoose = require("mongoose")

const BrokerSaiyyadSchema = mongoose.Schema({

    Id:String,
    underGroup:String,
    registrationType:String,
    fssai:String,
    brokerNumber:String,
    accNo:String,
    street:String,
    city:String,
    pincode:String,
    state:String,
    country:String,
    gst:String,
    panNo:String,
    email:String,
    bankDetail:String,
    whatsAppNo:String,
    brokerName:String,
})

module.exports = mongoose.model("BrokerSaiyyad", BrokerSaiyyadSchema);