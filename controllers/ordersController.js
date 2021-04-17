const express = require("express");
const orders = express.Router();
const Order = require("../models/orders.js");
const User = require("../models/users");

orders.post("/", (req, res) => {
  const orderBody = req.body;
  console.log(orderBody);
  //DOES user has a cart?
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

orders.get("/", (req, res) => {
  Order.find().populate({path:'userId', select:["username","_id","email","isAdmin"]}).exec((err, records) => {
    if (err) {
      res.status(400).send({
        error: err.message,
        message: "Retrieve order unsuccessful!",
        data: {},
      });
    } else {
      res.status(200).send({
        error: null,
        message: "Retrieve order success!",
        data: records,
      });
    }
  });
});

orders.delete("/:id", (req, res) => {
  Order.findByIdAndRemove(req.params.id, (err, deletedOrder) => {
    if (err) {
      res.status(400).send({
        error: err.mess,
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
          message: "Updated order success!",
          data: updatedOrder,
        });
      }
    }
  ).populate({path:'userId', select:["username","_id","email","isAdmin"]});
});

module.exports = orders;
