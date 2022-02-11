const mongoose = require("mongoose");
const { Schema } = mongoose;

const CitySchema = new Schema({
  _id: Number,
  prov_id: {
    type: Number,
    ref: "provlatlong",
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("citylatlong", CitySchema, "CityLatLong");
