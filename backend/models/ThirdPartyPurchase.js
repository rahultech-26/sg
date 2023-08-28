const mongoose = require("mongoose")

const ThirdPartyPurchaseSchema = mongoose.Schema({
    saudaDate:String,
    brokerName:String,
    partyName:String,
    factoryRate:String,
    freight:String,
    freightCondition:String,
    rate:String,
    quantity:String,
    remainingQuantity:String,
    status:String,
    remark:String,
    cashDiscount:String,
    billNo:String,
    amtR:Array,
    paymentStatus:{type:String,default:"Pending"}
})

module.exports = mongoose.model("ThirdPartyPurchase", ThirdPartyPurchaseSchema);