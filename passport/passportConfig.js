const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/users");

module.exports = function(passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      //verify callback will execute everytime a local strategy is used
      // "username" comes from req.body.username by default when the login route is executed
      // "password" comes from req.body.password by default when the login route is executed
      // "done" is invoked with diff arguments depending if user is valid or not
      User.findOne({ username: username }, (err, foundUser) => {
        if (err) {
          return done(err);
        } else if (!foundUser) {
          return done(null, false, { message: "Incorrect Username." }); //null is the error, false is the "user" along with custom message
        } else {
          bcrypt.compare(password, foundUser.password, (err, result) => {
            if (err) {
              console.log(err);
            } else if (!result) {
              return done(null, false, { message: "Incorrect Password." });
            } else {
              // if all is good and password is correct, error is "null" as there are no errors. also return the authenticated user object
              return done(null, user);
            }
          });
        }
      });
    })
  );

  passport.serializeUser((user, done) => {
    // stores a cookie inside the browser. takes the "user" created using local strategy and create a cookie with the userId
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    // takes a cookie, unrvels it and returns a user from it with the id.
    User.findById(id, (err, foundUser) => {
      done(err, foundUser);
    });
  });
};

