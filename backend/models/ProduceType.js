const mongoose = require("mongoose")

const ProduceTypeSchema = mongoose.Schema({
    produceType:String,

    

})

module.exports = mongoose.model("ProduceType", ProduceTypeSchema);