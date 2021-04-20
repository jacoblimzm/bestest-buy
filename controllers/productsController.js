const express = require("express");
const products = express.Router();
const Product = require("../models/products.js");
const productsSeed = require("../models/seed.js")

//seed all products data from seed.js
products.get("/seed", (req, res) => {
    Product.create(productsSeed, (error, seedData) => {
        res.redirect("/productsbackend");
    });
});

// show all products
products.get("/", (req, res) => {
    Product.find({}, (err, allProduct) => {
        if (err) {
            res.status(400).send({ message: "Unable to find product." });
        } else {
            res.status(200).send(allProduct);
        }
    });
});

//find by catergories
products.get("/:categories", (req, res) => {
    Product.find({ category: req.params.categories }, (err, productCategory) => {
        if (err) {
            res.status(400).send({ message: "Unable to find category." });
        } else {
            res.status(200).send(productCategory);
        }
    });
});

//find by ID
products.get("/findproduct/:id", (req, res) => {
    Product.findById(req.params.id, (err, productID) => {
        if (err) {
            res.status(400).send({ message: "Unable to find ID." });
        } else {
            res.status(200).send(productID);
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