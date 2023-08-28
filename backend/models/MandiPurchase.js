const mongoose = require("mongoose")

const MandiPurchaseSchema = mongoose.Schema({
 itemList:Array,
 farmNo:String,
 date:String,
 tradeType:String,
 bookletNo:String,
 pageNo:String,
 farmName:String,
 farmNameHindi:String,
 licenceNo:String,
 anubandhNo:String,
 mobileNo:String,
 village:String,
 aadharNo:String,
 sellerName:String,
 sellerNameHindi:String,
 remark:String,
 cashPayment:String,
 remaining:String,
 paymentDate:String,
 remainingPaymentType:String,
 bankLedger:String,
 ifscCode:String,
 accountNo:String,
 bankFarmer:String,
 branch:String,
 utrNo:String,
   
})

module.exports = mongoose.model("MandiPurchase", MandiPurchaseSchema);