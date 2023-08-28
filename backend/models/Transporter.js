const mongoose = require("mongoose")

const TransporterSchema = mongoose.Schema({

    Id:String,
    partyName:String,
    underGroup:String,
    broker:String,
    registrationType:String,
    fssai:String,
    mobileNumber:String,
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

module.exports = mongoose.model("Transporter", TransporterSchema);