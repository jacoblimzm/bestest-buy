const express = require("express");
const products = express.Router();
const Product = require("../models/products.js");
const productsSeed = require("../models/seed.js")

//list all products
products.get("/seed", (req, res) => {
    Product.create(productsSeed, (error, seedData) => {
        res.redirect("/productsbackend");
    });
});

products.get("/", (req, res) => {
    Product.find({}, (err, allProduct) => {
        if (err) {
            res.status(400).send({ message: "Unable to find product." });
        } else {
            res.status(200).send(allProduct);
        }
    });
});

//add new product
products.post("/", (req, res) => {
    Product.create(req.body, (error, createProducts) => {
        if (error) {
            res.status(400).send({ message: "Unable to create new product." });
        } else {
            res.status(200).send(createProducts);
        }
    });
});

// edit product
products.put("/:id", (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, updatedProducts) => {
            if (err) {
                res.status(400).send({ message: "Unable to find product." });
            } else {
                res.status(200).send(updatedProducts);
            }
        }
    );
});

// delete products in the catergory page e.g electronic page all the electronic items will be listed
products.delete("/:id", (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, deletedProduct) => {
        if (err) {
            res.status(400).send({ message: "Unable to remove product." });
        } else {
            res.status(200).send(deletedProduct);
        }
    });
});


module.exports = products;