const mongoose = require("mongoose")

const BookletNoSchema = mongoose.Schema({
    bookletNo:Number,
    pageNo:Number,


})

module.exports = mongoose.model("BookletNo", BookletNoSchema);