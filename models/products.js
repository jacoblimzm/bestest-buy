const mongoose = require("mongoose");
const productsSchema = mongoose.Schema({
    name: { type: String, required: true },
    brand: [{ type: String }],
    description: { type: String },
    category: [{ type: String }],
    image: { type: String, required: true },
    price: { type: Number },
}, {
    time: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Products", productsSchema);
