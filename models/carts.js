const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId, ref: 'user', required: [true, "userId is required"]
  },
  
  orders: [
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
  totalBill: { type:Number , default: 0},
  createdAt: { type: Date, default: Date.now },
});


const Cart = mongoose.model("carts", cartSchema);

module.exports = Cart;
