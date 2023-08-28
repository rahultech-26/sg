const mongoose = require("mongoose")

const MarkSchema = mongoose.Schema({
    mark:String,

    

})

module.exports = mongoose.model("Mark", MarkSchema);