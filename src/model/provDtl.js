const mongoose = require("mongoose");
const provgeo = require("./provMap");
const { Schema } = mongoose;

const ProvDtlSchema = new Schema({
  _id: Number,
  prov_id: {
    type: Number,
    ref: provgeo,
    required: true,
  },
  provCapital: String,
});

const provdtl = mongoose.model("provdtl", ProvDtlSchema, "ProvDetail");
module.exports = provdtl;
