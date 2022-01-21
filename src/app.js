const express = require("express"),
      mongoose = require("mongoose")

const port = 5000;

const app = express();

const mongo = mongoose.connect("mongodb+srv://arizulham:arizulham@trying.v85pk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongo.then(() => {
    console.log("DB Running")
}).catch((err) => {
    console.log(err)
})

app.get("/", (req, res) => {
    res.send("Check server is running")
})

app.listen(port, () => {
    console.log("Running")
})
