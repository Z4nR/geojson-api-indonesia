const express = require("express"),
      mongoose = require("mongoose"),
      route = require("./routes/api-router"),
      port = 5000,
      app = express()

require("dotenv")

const mongo = mongoose.connect(
    process.env.DB_CONNECTION, 
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)

mongo.then(() => {
    console.log("DB Running")
}).catch((err) => {
    console.log(err)
})

app.use("/getAll", route)

app.listen(port, () => {
    console.log("Running")
})
