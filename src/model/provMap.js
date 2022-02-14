const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProvSchema = new Schema({
  _id: Number,
  mapFeature: {
    type: {
      type: String,
      required: true,
    },
  },
});

const provgeo = mongoose.model("provlatlong", ProvSchema, "ProvLatLong");
module.exports = provgeo;
