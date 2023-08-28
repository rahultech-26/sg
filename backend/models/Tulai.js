const mongoose = require("mongoose")

const TulaiSchema = mongoose.Schema({
    tulaiId:String,
    labourRate:String,
    labourRatePrint:String,
    labourType:String,
    tulaiRate:String,
    tulaiRatePrint:String,
    tulaiType:String,
    

})

module.exports = mongoose.model("Tulai", TulaiSchema);