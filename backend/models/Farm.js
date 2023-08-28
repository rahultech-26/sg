const mongoose = require("mongoose")

const FarmSchema = mongoose.Schema({
    farmNo:String,
    farmName:String,
    farmNameHindi:String,
    mandiName:String,
    mandiLicenceNo:String,
    address:String,
    manNo:String,
    gstin:String,
    fssai:String,
    mobileNo1:String,
    mobileNo11:String,
    address:String,
    city:String,
    state:String,
    email:String,
    panNo:String,
    tanNo:String,
    pinCode:String,
    bank:String,
    ifsc:String,
    accountNo:String,


})

module.exports = mongoose.model("Farm", FarmSchema);