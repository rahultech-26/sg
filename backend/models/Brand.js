const mongoose = require("mongoose")

const BrandSchema = mongoose.Schema({
    brandId:String,
    brandName:String,
    

})

module.exports = mongoose.model("Brand", BrandSchema);