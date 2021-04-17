const express = require("express");
const carts = express.Router();
const Cart = require("../models/carts.js");


carts.post("/", (req, res) => {
  const cartBody = req.body;
  console.log(cartBody);
  //Create cart WHEN USER IS CREATED!!!! It will be unique as userId is unique
  Cart.create(cartBody, (err, createdCart) => {
    if (err) {
      res
        .status(400)
        .send({ error: err.message, message: "Cart unsuccessful!", data: {} });
    } else {
      res.status(200).send({
        error: null,
        message: "Cart created! Success!",
        data: createdCart,
      });
    }
  });
});

// Only can view own cart. 
carts.get("/:id", (req, res) => {
  Cart.findById(req.params.id, (err, latestCart) => {
    if (err) {
      res.status(400).send({
        error: err.message,
        message: "Retrieve latest cart orders unsuccessful!",
        data: {},
      });
    } else {
      res.status(200).send({
        error: null,
        message: "Retrieve latest cart orders success!",
        data: latestCart,
      });
    }
  }).populate('orders.productId')
  .populate({path:'userId', select:["username","_id","email","isAdmin"]});
});

//THIS IS DELETE THE WHOLE CART. NOT THE PRODUCTS in ORDERS array.
carts.delete("/:id", (req, res) => {
  Cart.findByIdAndRemove(req.params.id, (err, deletedCart) => {
    if (err) {
      res.status(400).send({
        error: err.mess,
        message: "Delete cart unsuccessful!",
        data: {},
      });
    } else {
      res.status(200).send({
        error: null,
        message: "Delete cart success!",
        data: deletedCart,
      });
    }
  });
});

// UPDATE, DELETE ORDERS!!
carts.put("/:id", (req, res) => {
  Cart.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedCart) => {
      if (err) {
        res.status(400).send({
          error: err.message,
          message: "Update cart unsuccessful!",
          data: {},
        });
      } else {
        res.status(200).send({
          error: null,
          message: "Updated cart success! Orders has been changed!",
          data: updatedCart,
        });
      }
    }
  )
  // .populate('orders.productId')
  .populate({path:'userId', select:["username","_id","email","isAdmin"]})
  ;

  
});

module.exports = carts;
