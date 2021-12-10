const Router = require('koa-router');

const UserRouter = require('./components/user/routes');
const EventRouter = require('./components/event/routes');

const router = new Router({
  prefix: '/api/v1',
});

module.exports = () => {
  router.use('/users', UserRouter.routes(), UserRouter.allowedMethods());
  router.use('/events', EventRouter.routes(), EventRouter.allowedMethods());
  return router;
};
