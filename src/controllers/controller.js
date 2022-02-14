const cityMap = require("../model/cityMap");
const provDtl = require("../model/provDtl");
const provMap = require("../model/provMap");

module.exports = {
  getProvMap: async (req, res, next) => {
    try {
      const prov = await provMap.find();
      res.status(200).json(prov);
    } catch (err) {
      next(err);
    }
  },

  getCityByProv: async (req, res, next) => {
    const { prov_id } = req.query;
    try {
      const city = await cityMap.find({ prov_id });
      res.status(200).json(city);
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
};
