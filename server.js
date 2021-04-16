require("dotenv-safe").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");


// --------------------------------------- CONSTANTS ---------------------------------------
const app = express();
const PORT = process.env.PORT;
const SECRET = process.env.SECRET;

// --------------------------------------- MIDDLEWARE ---------------------------------------
app.use(express.json()); // for parsing raw json information
app.use(express.urlencoded({ extended: true })); // for parsing form information.
app.use(cors({
    origin: "http://localhost:3000", //location of the react app that is connect
    credentials: true
}))
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
}))

// --------------------------------------- CONTROLLERS ---------------------------------------
const usersController = require("./controllers/usersController");
app.use("/usersbackend", usersController); 

// --------------------------------------- CONNECTIONS ---------------------------------------
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