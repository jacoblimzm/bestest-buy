require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
// express session
const mongoose = require("mongoose");
const productsController = require("./controllers/productsController.js");


// CONSTANTS
const app = express();
const PORT = process.env.PORT;

// MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended: false })); // for parsing form information.
app.use(express.json()); // for parsing raw json information
app.use("/productsbackend", productsController);


//TEST
app.get('/', (req, res) => {
  res.send('hi');
});

// CONTROLLERS


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