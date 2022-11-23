const express = require("express"),
  mongoose = require("mongoose"),
  route = require("./routes/api-router"),
  app = express(),
  bodyParser = require("body-parser"),
  cors = require("cors");

require("dotenv").config();

//Async Await
mongoose.Promise = global.Promise;

//Middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);
app.use(bodyParser.json());

//Router
app.use("/v1", route);

//Catch 404 Error
app.use((req, res, next) => {
  const err = new Error("Not Found, Try Again");
  err.status = 404;
  next(err);
});

//Error Handler Function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;

  res.status(status).json({
    error: {
      message: error.message,
    },
  });

  console.log(err);
});

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
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Running");
  console.log(port);
});
