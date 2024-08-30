const express = require("express");
const dotenv = require("dotenv");
const postRoute = require("./routes/post");
const mongoose = require("mongoose");

dotenv.config();

// creating instance of our applicarion
const app = express();

// create connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected"))
  .catch(() => console.log("error"));

// middleware to extract the body
app.use(express.json());

// get PORT number
const PORT = process.env.PORT || 5000;

// getting post Routes
app.use(postRoute);

// this listen() method is used to start a web server and
// listen to the connections on the specified host and port.
app.listen(PORT, () => {
  console.log(`Application is Running on port ${PORT}`);
});
