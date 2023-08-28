const mongoose = require("mongoose")

const PartySaiyyadSchema = mongoose.Schema({

    Id:String,
    partyName:String,
    underGroup:String,
    broker:String,
    registrationType:String,
    fssai:String,
    partyNumber:String,
    manNo:String,
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
})

module.exports = mongoose.model("PartySaiyyad", PartySaiyyadSchema);