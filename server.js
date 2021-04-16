require("dotenv-safe").config();
const express = require("express");
// express session
const mongoose = require("mongoose");

// CONSTANTS
const app = express();
const PORT = process.env.PORT;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true })); // for parsing form information.
app.use(express.json()); // for parsing raw json information


// CONTROLLERS
const usersController = require("./controllers/usersController");
app.use("/usersbackend", usersController); 

// CONNECTIONS
app.listen(PORT, () => {
  console.log("server is listening at port", PORT);
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
});