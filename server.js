require("dotenv-safe").config();
const express = require("express");

const passport = require("passport");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");





// --------------------------------------- CONSTANTS ---------------------------------------
const app = express();
const PORT = process.env.PORT;
const SECRET = process.env.SECRET;



//TEST
app.get('/', (req, res) => {
  res.send('hi');
});

// --------------------------------------- MIDDLEWARE ---------------------------------------
app.use(express.json()); // for parsing raw json information
app.use(express.urlencoded({ extended: true })); // for parsing form information.
app.use(cors({
  origin: "http://localhost:3000", //location of the react app that is connected to
  credentials: true
}))
app.use(express.json()); // for parsing raw json information
app.use(session({
  secret: SECRET,
  resave: false,
  saveUninitialized: false,
}))
// KEY: passport middleware must come AFTER the session support has been set up
//initialise passport using the built in initialise() method which will set up automatically for authentication.
app.use(passport.initialize());
//then use passport to initialise sessions as we are using persistent login sessions. 
app.use(passport.session());

// --------------------------------------- CONTROLLERS ---------------------------------------
const usersController = require("./controllers/usersController");
const sessionsController = require("./controllers/sessionsController");
const cartsController = require("./controllers/cartsController");
const productsController = require("./controllers/productsController.js");
app.use("/usersbackend", usersController); 
app.use("/sessionsbackend", sessionsController);
app.use("/cartsbackend", cartsController);
app.use("/productsbackend", productsController);


// --------------------------------------- CONNECTIONS ---------------------------------------
app.listen(PORT, () => {
  console.log("server is listening at port", PORT);
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  runValidators: true
});

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
});