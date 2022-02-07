const mongoose = require("mongoose");
const { Schema } = mongoose;
require("mongoose-geojson-schema");

const geoSchema = new Schema({
  featureCollection: Schema.Types.FeatureCollection,
});

const featureCollect = mongoose.model("GeoJSON", geoSchema);

const mapData = new featureCollect({
  featureCollection: {
    type: String,
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

const ProvSchema = new Schema({
  _id: Number,
  mapFeature: mapData,
});

module.exports = mongoose.model("ProvMap", ProvSchema);
