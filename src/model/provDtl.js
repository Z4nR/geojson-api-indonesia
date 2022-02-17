const mongoose = require("mongoose");
const provgeo = require("./provMap");
const { Schema } = mongoose;

const ProvDtlSchema = new Schema({
  _id: String,
  prov_id: Number,
  provCapital: String,
});

const provdtl = mongoose.model("provdtl", ProvDtlSchema, "ProvDetail");
module.exports = provdtl;
