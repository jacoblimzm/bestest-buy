const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId, ref: 'user', required: [true, "userId is required"]
  },
  ordersHistory: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'products'
      },
      quantity: {
        type: Number,
        min: 1,
      }
    }
  ],
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
