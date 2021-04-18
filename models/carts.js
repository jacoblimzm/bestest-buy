const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId, ref: 'user', required: [true, "userId is required"]
  },
  
  currentCart: [
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
  currentCartTotalBill: { type:Number , default: 0},
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
  ordersHistoryTotalBill: { type:Number , default: 0},
  createdAt: { type: Date, default: Date.now },
});

const Cart = mongoose.model("carts", cartSchema);

module.exports = Cart;
