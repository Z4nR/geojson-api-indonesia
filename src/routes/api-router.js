const provMap = require("../model/provMap");
const express = require("express"),
  router = express.Router();

router.get("/get-province-map", async (req, res) => {
  try {
    const prov = await provMap.find();
    res.json(prov);
  } catch (error) {
    res.json({ message: err });
  }
});

module.exports = router;
