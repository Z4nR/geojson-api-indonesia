const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProvSchema = new Schema({
  _id: Number,
  provFeature: {
    type: {
      type: String,
      required: true,
    },
  },
  island: String,
});

const provgeo = mongoose.model("provlatlong", ProvSchema, "ProvLatLong");
module.exports = provgeo;
