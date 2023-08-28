const mongoose = require("mongoose")

const BankSchema = mongoose.Schema({
    ifscCode:String,
    accountNo:String,
    branch:String,
    

})

module.exports = mongoose.model("Bank", BankSchema);