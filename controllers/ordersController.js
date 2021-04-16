const express = require("express");
const orders = express.Router();
const Order = require("../models/order.js");

orders.post("/", async (req, res) => {
    Order.create(req.body, (error, createdOrder) => {
        res.status(200).send(createdOrder);
    });
});




module.export = orders;