const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true 
  },
  orders: [
    {
      //type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true 
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});


const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
