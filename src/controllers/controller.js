const citygeo = require("../model/cityMap");
const provDtl = require("../model/provDtl");
const provgeo = require("../model/provMap");

module.exports = {
  getProvMap: async (_req, res, _next) => {
    const prov = await provgeo.find();
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json(prov);
  },

  getProvByIsland: async (req, res, _next) => {
    const { island } = req.query;
    const provIsland = await provgeo.find({ island });
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json(provIsland);
  },

  getProvDetail: async (req, res, _next) => {
    const { prov_id } = req.query;
    const detailProv = await provDtl.find({ prov_id });
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json(detailProv);
  },

  getCityMap: async (_req, res, _next) => {
    const city = await citygeo.find();
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json(city);
  },

  getCityByProv: async (req, res, _next) => {
    const { prov_id } = req.query;
    const city = await citygeo.find({ prov_id });
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json(city);
  },

  getCityByIsland: async (req, res, _next) => {
    const { island } = req.query;
    const cityIsland = await citygeo.find({ island });
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json(cityIsland);
  },
};
