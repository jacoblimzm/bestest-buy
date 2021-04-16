const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  userId: { type: ObjectId, required: false },
  items: [
    {
      _id: Number,
      name: { type: String },
      price: { type: Number },
      quantity: { type: Number, required: true },
    },
  ],
  timestamp: { type: Date, default: Date.now, required: false },
});

module.exports = mongoose.model("Order", orderSchema);
