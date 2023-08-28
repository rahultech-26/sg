const mongoose = require("mongoose")

const UnderGroupSchema = mongoose.Schema({
    undergroup:String,

    

})

module.exports = mongoose.model("UnderGroup", UnderGroupSchema);