const express = require("express");
const categories = express.Router();
const Category = require("../models/categories.js");
const categoriesSeed = require("../models/categoriesSeed.js");

categories.get("/seed", (req, res) => {
    Category.create(categoriesSeed, (error, data) => {
        res.redirect("/categoriesbackend");
    });
});

categories.get("/", (req, res) => {
    Category.find({}, (err, categories) => {
        if (err) {
            res.status(400).send({ message: "Unable to find categories." });
        } else {
            res.status(200).send(categories);
        }
    });
});
module.exports = categories;
