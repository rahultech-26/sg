const mongoose = require("mongoose")

const BrokerSchema = mongoose.Schema({
    partyName:String,
    type:String,
    mobileNo:String,
})

module.exports = mongoose.model("Broker", BrokerSchema);