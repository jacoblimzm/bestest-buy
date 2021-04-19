const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema({
    category: { type: String, required: true },
})

module.exports = mongoose.model("category", categoriesSchema);