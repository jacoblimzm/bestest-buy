const express = require("express");
const orders = express.Router();
const Order = require("../models/orders.js");


orders.post("/", (req, res) => {
  const orderBody = req.body;
  console.log(orderBody);
  // CREATE ORDER
  Order.create(orderBody, (err, createdOrder) => {
    if (err) {
      res
        .status(400)
        .send({ error: err.message, message: "Order unsuccessful!", data: {} });
    } else {
      res.status(200).send({
        error: null,
        message: "Order created! Success!",
        data: createdOrder,
      });
    }
  });
});
//Created by Eleanor- to test out data
orders.get("/", (req, res) => {
  Order.find({}, (err, latestOrder) => {
    if (err) {
      res.status(400).send({
        error: err.message,
        message: "Retrieve order unsuccessful!",
        data: {},
      });
    } else {
      res.status(200).send({
        latestOrder
      });
    }
  }).populate("ordersHistory.productId")
    .populate({ path: "userId", select: ["username", "_id", "email", "role"] });
});


// Only can view own order. 
orders.get("/:id", (req, res) => {
  Order.findById(req.params.id, (err, latestOrder) => {
    if (err) {
      res.status(400).send({
        error: err.message,
        message: "Retrieve order unsuccessful!",
        data: {},
      });
    } else {
      res.status(200).send({
        error: null,
        message: "Retrieve orders success!",
        data: latestOrder,
      });
    }
  }).populate("ordersHistory.productId")
    .populate({ path: "userId", select: ["username", "_id", "email", "role"] });
});

//DELETE ORDER
orders.delete("/:id", (req, res) => {
  Order.findByIdAndRemove(req.params.id, (err, deletedOrder) => {
    if (err) {
      res.status(400).send({
        error: err.message,
        message: "Delete order unsuccessful!",
        data: {},
      });
    } else {
      res.status(200).send({
        error: null,
        message: "Delete order success!",
        data: deletedOrder,
      });
    }
  });
});

// UPDATE ORDER
orders.put("/:id", (req, res) => {
  Order.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedOrder) => {
      if (err) {
        res.status(400).send({
          error: err.message,
          message: "Update order unsuccessful!",
          data: {},
        });
      } else {
        res.status(200).send({
          error: null,
          message: "Updated order success! Orders has been changed!",
          data: updatedOrder,
        });
      }
    }
  )
    .populate({ path: "userId", select: ["username", "_id", "email", "role"] })
    ;


});

module.exports = orders;
