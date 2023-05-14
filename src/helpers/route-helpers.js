const Joi = require("joi");

module.exports = {
  validatePage: (schema, page) => {
    return (req, res, next) => {
      console.log(req.query);

      const pageNumber = Number.parseInt(req["query"][page]);

      const result = schema.validate(pageNumber);

      console.log(result);

      if (result.error) {
        return res.status(400).json(result.error);
      } else {
        if (!req.value) {
          req.value = {};
        }

        if (!req.value["query"]) {
          req.value["query"] = {};
        }

        req.value["query"] = result.value;

        next();
      }
    };
  },

  validateProvId: (schema, prov_id) => {
    return (req, res, next) => {
      console.log(req.query);

      const provId = Number.parseInt(req["query"][prov_id]);

      const result = schema.validate(provId);

      console.log(result);

      if (result.error) {
        return res.status(400).json(result.error);
      } else {
        if (!req.value) {
          req.value = {};
        }

        if (!req.value["query"]) {
          req.value["query"] = {};
        }

        req.value["query"] = result.value;

        next();
      }
    };
  },

  validateIsland: (schema, island) => {
    return (req, res, next) => {
      console.log(req.query);

      const islandName = req["query"][island];

      const result = schema.validate(islandName);

      console.log(result);

      if (result.error) {
        return res.status(400).json(result.error);
      } else {
        if (!req.value) {
          req.value = {};
        }

        if (!req.value["query"]) {
          req.value["query"] = {};
        }

        req.value["query"] = result.value;

        next();
      }
    };
  },

  validateIslandPage: (schema, island, page) => {
    return (req, res, next) => {
      console.log(req.query);

      const pageNumber = Number.parseInt(req["query"][page]);
      const islandName = req["query"][island];

      const result = schema.validate({ island: islandName, page: pageNumber });

      console.log(result);

      if (result.error) {
        return res.status(400).json(result.error);
      } else {
        if (!req.value) {
          req.value = {};
        }

        if (!req.value["query"]) {
          req.value["query"] = {};
        }

        req.value["query"][island] = result.value.island;
        req.value["query"][page] = result.value.page;

        next();
      }
    };
  },

  validateProvPage: (schema, prov_id, page) => {
    return (req, res, next) => {
      console.log(req.query);

      const pageNumber = Number.parseInt(req["query"][page]);
      const provId = Number.parseInt(req["query"][prov_id]);

      const result = schema.validate({ prov_id: provId, page: pageNumber });

      console.log(result);

      if (result.error) {
        return res.status(400).json(result.error);
      } else {
        if (!req.value) {
          req.value = {};
        }

        if (!req.value["query"]) {
          req.value["query"] = {};
        }

        req.value["query"][prov_id] = result.value.prov_id;
        req.value["query"][page] = result.value.page;

        next();
      }
    };
  },

  schema: {
    page: Joi.number().integer().required(),
    island: Joi.string().required(),
    prov_id: Joi.number().integer().required(),
    islandPage: Joi.object().keys({
      page: Joi.number().integer().required(),
      island: Joi.string().required(),
    }),
    provPage: Joi.object().keys({
      page: Joi.number().integer().required(),
      prov_id: Joi.number().integer().required(),
    }),
  },
};
