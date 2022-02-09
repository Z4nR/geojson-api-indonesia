const express = require("express"),
  mongoose = require("mongoose"),
  route = require("./routes/api-router"),
  port = 5000,
  app = express(),
  bodyParser = require("body-parser"),
  cors = require("cors");

require("dotenv").config();

//Middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "PUT"],
  })
);
app.use(bodyParser.json());

//Import Router
app.use("/geoapi", route);

//Connect DB
const mongo = mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongo
  .then(() => {
    console.log("DB Running");
  })
  .catch((err) => {
    console.log(err);
  });

//Listen to port
app.listen(port, () => {
  console.log("Running");
});
