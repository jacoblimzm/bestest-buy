const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/users");



// CONSTANTS
const users = express.Router();


// ROUTES
users.post("/", (req, res) => {
    
    const newUser = req.body;
})


users.put("/")


users.delete("/")


module.exports = users;