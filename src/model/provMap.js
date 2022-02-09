const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProvSchema = new Schema({
  _id: Number,
  mapFeature: {
    type: {
      type: String,
      required: true,
    },
    feature: [
      {
        type: String,
        geometry: {
          type: {
            type: String,
            enum: ["Polygon"],
            required: true,
          },
          coordinates: {
            type: [[[Number]]],
            required: true,
          },
        },
        properties: {
          Code: Number,
          Country: String,
          Kind: String,
          Name: String,
          Parent: Number,
          Source: String,
          Year: Number,
        },
      },
    ],
  },
});

module.exports = mongoose.model("ProvMap", ProvSchema);
