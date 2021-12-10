const joi = require('joi');

exports.postUserSchema = {
  body: joi.object({
    email: joi.string().email().required(),
    phone: joi
      .string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
  }),
};
