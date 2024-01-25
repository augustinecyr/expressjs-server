// activity 1
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
// environment variables from .env
require('dotenv').config();
// activity 2
// route
app.get("/", (req, res) => {
  res.send("Welcome to the learning space");
});

const tutorialRoute = require("./routes/tutorial");
app.use("/tutorial", tutorialRoute);

app.use(
  cors({
    origin: process.env.CLIENT_URL
  })
);

// let port = 3001; method 1: hardcoded
let port = process.env.APP_PORT || 3001; // method 2: using .env variables
app.listen(port, () => {
  console.log("Server is running on port:", port); // port becomes undefined because port is no longer a number but a string.
});
