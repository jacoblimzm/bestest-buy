const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/users");

// --------------------------------------- CONSTANTS ---------------------------------------
const users = express.Router();
const saltRounds = 10;

// --------------------------------------- ROUTES ---------------------------------------

// SHOW User route
users.get("/", (req, res) => {
    res.send(req.user); //recall that the entire user and session is stored inside of req.user when authenticated with passport.
})

// CREATE User route
users.post("/", (req, res) => {
  const newUser = req.body;
  console.log(newUser);

  bcrypt.hash(newUser.password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    } else { // if all is successful, change the password to the user to the hash.
      newUser.password = hash;
      User.create(newUser, (err, createdUser) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          console.log(createdUser);
          res.send(createdUser) // send the createdUser obj back to client as a response.
        }
      });
    }
  });
});

users.put("/");

users.delete("/");

module.exports = users;
