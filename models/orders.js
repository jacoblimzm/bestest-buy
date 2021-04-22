const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: "user", required: [true, "userId is required"]
  },
  ordersHistory: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId, ref: "products"
      },
      quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [1, "Quantity can not be less than 1"]

      },
    }
  ],
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
