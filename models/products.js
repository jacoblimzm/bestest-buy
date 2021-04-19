const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String },
    description: { type: String, required: true, minLength: 5 },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, min: 0.1 },
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("products", productsSchema);