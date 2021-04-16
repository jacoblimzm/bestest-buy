const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  username: { type: String, required: true },
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
//  items: { type: Array  }, 
  timestamp: { type: Date, default: Date.now, required: false },
});


const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
