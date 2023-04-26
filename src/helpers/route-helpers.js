const Joi = require("joi");

module.exports = {
  schema: {
    idProv: Joi.object().keys({
      query: Joi.number().required(),
    }),

    island: Joi.object().keys({
      query: Joi.string().required(),
    }),

    page: Joi.object().keys({
      query: Joi.number().required(),
    }),
  },
};
