const citygeo = require("../model/cityMap");
const provDtl = require("../model/provDtl");
const provgeo = require("../model/provMap");

module.exports = {
  getProvMap: async (req, res, next) => {
    try {
      const prov = await provgeo.find();
      res.status(200).json(prov);
    } catch (err) {
      next(err);
    }
  },

  getProvByIsland: async (req, res, next) => {
    const { island } = req.query;
    try {
      const provIsland = await provgeo.find({ island });
      res.status(200).json(provIsland);
    } catch (err) {
      next(err);
    }
  },

  getProvDetail: async (req, res, next) => {
    const { prov_id } = req.query;
    try {
      const detailProv = await provDtl.find({ prov_id });
      res.status(200).json(detailProv);
    } catch (err) {
      next(err);
    }
  },

  getCityByProv: async (req, res, next) => {
    const { prov_id } = req.query;
    try {
      const city = await citygeo.find({ prov_id });
      res.status(200).json(city);
    } catch (err) {
      next(err);
    }
  },

  getCityByIsland: async (req, res, next) => {
    const { island } = req.query;
    try {
      const cityIsland = await citygeo.find({ island });
      res.status(200).json(cityIsland);
    } catch (err) {
      next(err);
    }
  },
};
