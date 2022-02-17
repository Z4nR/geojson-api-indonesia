const mongoose = require("mongoose");
const { Schema } = mongoose;

const CitySchema = new Schema({
  _id: Number,
  prov_id: Number,
  type: {
    type: String,
    required: true,
  },
});

const citygeo = mongoose.model("citylatlong", CitySchema, "CityLatLong");
module.exports = citygeo;
