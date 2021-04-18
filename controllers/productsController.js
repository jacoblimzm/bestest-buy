const express = require("express");
const products = express.Router();
const Product = require("../models/products.js");
const router = express.Router();

router.get("/seed", (req, res) => {
    Product.create(
        {
            brand: ["Apple", "HP", "Dell"],
            category: ["Electronics",],
        },
        (err, data) => {
            res.redirect("/productsbackend");
        }
    );
});


//list all products
products.get("/", (req, res) => {
    Product.find({}, (err, allProduct) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }
        res.send(allProduct);
    });
});

//add new product
products.post("/", (req, res) => {
    Product.create(req.body, (error, createProducts) => {
        if (error) {
            res.status(400).json({ error: error.message });
        }
        res.status(200).json(createProducts);
    });
});

// edit product
products.put("/:id", (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, updatedProducts) => {
            if (err) {
                res.status(400).json({ error: err.message });
            }
            res.status(200).json(updatedProducts);
        }
    );
});

// delete products in the catergory page e.g electronic page all the electronic items will be listed
products.delete("/:id", (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, deletedProduct) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }
        res.status(200).json(deletedProduct);
    });
});


module.exports = products;