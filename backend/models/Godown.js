const mongoose = require("mongoose")

const GodownSchema = mongoose.Schema({
    godownNumber:String,
    godownName:String,
    godownNameHindi:String,
    godownInMandi:String,
    

})

module.exports = mongoose.model("Godown", GodownSchema);