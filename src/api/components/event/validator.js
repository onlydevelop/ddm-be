const joi = require('joi');

exports.postEventSchema = {
  params: joi.object({
    userId: joi.number().positive().integer().required(),
  }),
  body: joi
    .object({
      emailNotification: joi.boolean(),
      phoneNotification: joi.boolean(),
    })
    .min(1),
};
