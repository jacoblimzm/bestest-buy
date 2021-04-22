const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema({
    image: { type: String, required: true },
    category: { type: String, required: true },
})

module.exports = mongoose.model("category", categoriesSchema);