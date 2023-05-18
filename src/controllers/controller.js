const citygeo = require("../model/cityMap");
const provDtl = require("../model/provDtl");
const provgeo = require("../model/provMap");

let pageNumber = 1;
const provLimit = 3;
const cityLimit = 8;

module.exports = {
  getProvMapPage: async (req, res, next) => {
    const provLength = await provgeo.count();

    res.status(200).json({
      totalPage: Math.ceil(provLength / Number.parseInt(provLimit)),
    });
  },

  getProvMap: async (req, res, next) => {
    const page = req.value.query;
    if (!Number.isNaN(page) && page > 0) {
      pageNumber = page;
    }

    const prov = await provgeo
      .find()
      .skip((pageNumber - 1) * provLimit)
      .limit(provLimit)
      .sort({ _id: 1 });

    if (page <= 0) {
      res.status(404).json({
        msg: "Nomor page tidak terdeteksi, silahkan mulai dengan query ?page=1",
      });
    } else {
      res.status(200).json(prov);
    }
  },

  getProvOnIslandPage: async (req, res, next) => {
    const island = req.value.query;
    const provOnIslandLength = await provgeo.find({ island }).count();

    res.status(200).json({
      totalPage: Math.ceil(provOnIslandLength / Number.parseInt(provLimit)),
    });
  },

  getProvByIsland: async (req, res, next) => {
    const { island } = req.value.query;

    const { page } = req.value.query;
    if (!Number.isNaN(page) && page > 0) {
      pageNumber = page;
    }

    const provIsland = await provgeo
      .find({ island })
      .skip((pageNumber - 1) * provLimit)
      .limit(provLimit)
      .sort({ _id: 1 });

    if (page <= 0) {
      res.status(404).json({
        msg: "Nomor page tidak terdeteksi, silahkan mulai dengan query ?page=1",
      });
    } else {
      res.status(200).json(provIsland);
    }
  },

  getProvDetail: async (req, res, next) => {
    const prov_id = req.value.query;
    const detailProv = await provDtl.find({ _id: prov_id });
    console.log(detailProv);
    res.status(200).json(detailProv);
  },

  getCityMapPage: async (req, res, next) => {
    const cityLength = await citygeo.count();

    res.status(200).json({
      totalPage: Math.ceil(cityLength / Number.parseInt(cityLimit)),
    });
  },

  getCityMap: async (req, res, next) => {
    const page = req.value.query;
    if (!Number.isNaN(page) && page > 0) {
      pageNumber = page;
    }

    const city = await citygeo
      .find()
      .skip((pageNumber - 1) * cityLimit)
      .limit(cityLimit)
      .sort({ _id: 1 });

    if (page <= 0) {
      res.status(404).json({
        msg: "Nomor page tidak terdeteksi, silahkan mulai dengan query ?page=1",
      });
    } else {
      res.status(200).json(city);
    }
  },

  getCityByProvPage: async (req, res, next) => {
    const prov_id = req.value.query;
    const cityByProvLength = await citygeo.find({ prov_id }).count();

    res.status(200).json({
      totalPage: Math.ceil(cityByProvLength / Number.parseInt(cityLimit)),
    });
  },

  getCityByProv: async (req, res, next) => {
    const { prov_id } = req.value.query;

    const { page } = req.value.query;
    if (!Number.isNaN(page) && page > 0) {
      pageNumber = page;
    }

    const cityProv = await citygeo
      .find({ prov_id })
      .skip((pageNumber - 1) * cityLimit)
      .limit(cityLimit)
      .sort({ _id: 1 });

    if (page <= 0) {
      res.status(404).json({
        msg: "Nomor page tidak terdeteksi, silahkan mulai dengan query ?page=1",
      });
    } else {
      res.status(200).json(cityProv);
    }
  },

  getCityOnIslandPage: async (req, res, next) => {
    const island = req.value.query;
    const cityOnIslandLength = await citygeo.find({ island }).count();

    res.status(200).json({
      totalPage: Math.ceil(cityOnIslandLength / Number.parseInt(cityLimit)),
    });
  },

  getCityByIsland: async (req, res, next) => {
    const { island } = req.value.query;

    const { page } = req.value.query;
    if (!Number.isNaN(page) && page > 0) {
      pageNumber = page;
    }

    const cityIsland = await citygeo
      .find({ island })
      .skip((pageNumber - 1) * cityLimit)
      .limit(cityLimit)
      .sort({ _id: 1 });

    if (page <= 0) {
      res.status(404).json({
        msg: "Nomor page tidak terdeteksi, silahkan mulai dengan query ?page=1",
      });
    } else {
      res.status(200).json(cityIsland);
    }
  },
};
