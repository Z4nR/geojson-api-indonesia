const mongoose = require("mongoose");
const provgeo = require("./provMap");
const { Schema } = mongoose;

const CitySchema = new Schema({
  _id: Number,
  prov_id: Number,
  type: {
    type: String,
    ref: provgeo,
    required: true,
  },
});

const citygeo = mongoose.model("citylatlong", CitySchema, "CityLatLong");
module.exports = citygeo;
