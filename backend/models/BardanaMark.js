const mongoose = require("mongoose")

const BardanaMarkSchema = mongoose.Schema({
    bardanaMarkId:String,
    bardanaMark:String,

    

})

module.exports = mongoose.model("BardanaMark", BardanaMarkSchema);