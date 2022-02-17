const mongoose = require("mongoose");
const { Schema } = mongoose;

const CitySchema = new Schema({
  _id: Number,
  prov_id: Number,
  cityFeature: {
    type: {
      type: String,
      required: true,
    },
  },
  island: String,
});

const citygeo = mongoose.model("citylatlong", CitySchema, "CityLatLong");
module.exports = citygeo;
