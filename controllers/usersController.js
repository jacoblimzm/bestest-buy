const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/users");
const isUserAuthenticated = require("../passport/middleware");

// --------------------------------------- CONSTANTS ---------------------------------------
const users = express.Router();
const saltRounds = 10;

// --------------------------------------- ROUTES ---------------------------------------

// SHOW User route
users.get("/", isUserAuthenticated, (req, res) => {
  console.log(req.isAuthenticated());
  res.send(req.user); //recall that the entire user and session is stored inside of req.user when authenticated with passport.
  // res.json() returns a similar response as res.send().
});

// CREATE User route
users.post("/", (req, res) => {
  const newUser = req.body;
  console.log(newUser);

  // do validation checks: if fields empty, or if user already exists.
  bcrypt.hash(newUser.password, saltRounds, (err, hash) => {
    if (err) {
      res.send(err);
    } else {
      // if all is successful, change the password to the user to the hash.
      newUser.password = hash;
      User.create(newUser, (err, createdUser) => {
        if (err) {
          res.send(err);
        } else {
          console.log(createdUser);
          res.send(createdUser); // send the createdUser obj back to client as a response.
          // TO DO: authenticate user immediately and log them in after registration?
        }
      });
    }
  });
});

// EDIT User Route
users.put("/:id", isUserAuthenticated, (req, res) => {

  const editedUser = req.body;
    bcrypt.hash(editedUser.password, saltRounds, (err, hash) => {
      if (err) {
        res.send(err);
      } else {
        editedUser.password = hash;
        User.findByIdAndUpdate(
          req.params.id,
          { ...editedUser },
          { new: true },
          (err, updatedUser) => {
            if (err) {
              res.send({ message: "Did not update successfully." });
            } else {
              res.send(updatedUser);
            }
          }
        );
      }
    });

  // if (req.isAuthenticated()) {
  //   //built-in method of passport to check if current user is authenticated. returns a boolean
  // } else { // not necessary since middleware has been used
  //   res.send({ message: "Request is denied. Not a valid login session." });
  // }
});

users.delete("/:id", isUserAuthenticated, (req, res) => {

  User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    if (err) {
      res.send(err);
    } else {
      res.send(deletedUser, {
        message: "User has been successfully deleted!",
      });
    }
  });

  // if (req.isAuthenticated()) {  
  //   //built-in method of passport to check if current user is authenticated. returns a boolean
  // } else {
  //   res.send({ message: "Request is denied. Not a valid login session." });
  // }
});

module.exports = users;
