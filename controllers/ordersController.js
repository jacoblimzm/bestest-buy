const express = require("express");
const orders = express.Router();
const Order = require("../models/orders.js");
const User = require("../models/users");


orders.post("/", async (req, res) => {
    const orderBody = req.body;
    console.log(orderBody);
    Order.create(orderBody, (error, createdOrder) => {   
        if(error){
            res.status(400).send({"message": "Order unsuccessful!" , data: {}});
        }

        res.status(200).send({"message": "Order created! Success!" , data: createdOrder});
    });
});

orders.get("/", async (req, res) => {
    Order.find().exec((error, records) => {
        if(error){
            res.status(400).send({"message": "Retrieve order unsuccessful!" , data: {}});
        }

        res.status(200).send({"message": "Retrieve order success!" , data: records});
    });
});

module.exports = orders;