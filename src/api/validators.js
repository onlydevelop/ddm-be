const validateMiddleware = require('koa-joi-validate-middleware');

const errorCallback = (ctx, error) => {
  ctx.status = 422;
  ctx.body = error.message;
};

const { postUserSchema } = require('./components/user/validator');
const { postEventSchema } = require('./components/event/validator');

exports.postUserValidator = validateMiddleware.create(
  postUserSchema,
  errorCallback
);

exports.postEventValidator = validateMiddleware.create(
  postEventSchema,
  errorCallback
);
