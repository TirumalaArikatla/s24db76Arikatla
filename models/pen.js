const mongoose = require("mongoose")
const penSchema = mongoose.Schema({
pen_name: String,
ink: String,
cost: Number
})
module.exports = mongoose.model("pen",
penSchema)