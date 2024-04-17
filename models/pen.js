const mongoose = require("mongoose")
const penSchema = mongoose.Schema({
pen_name: String,
ink: {
    type: String,
    minlength: 1,
    maxlength: 19,

},
cost: {
    type:Number,
    min : 1,
    max : 234,
}
})
module.exports = mongoose.model("pen",
penSchema)