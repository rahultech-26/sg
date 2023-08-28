const mongoose = require("mongoose")

const PartySchema = mongoose.Schema({
    partyName:String,
    type:String,
    mobileNo:String,
})

module.exports = mongoose.model("Party", PartySchema);