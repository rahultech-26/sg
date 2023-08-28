const mongoose = require("mongoose")

const YieldSchema = mongoose.Schema({
    yieldId:String,
    yieldName:String,
    yieldNameHindi:String,
    mandiTax:String,
    unsecuredFee:String,
    hsnCode:String,
    gstTax:String,
    igst:String,
    cgst:String,
    sgst:String,

})

module.exports = mongoose.model("Yield", YieldSchema);