const express = require("express"),
      router = express.Router()

router.get("/", (req, res) => {
    res.send("Check server is running")
})

module.exports = router