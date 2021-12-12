const Router = require('koa-router');
const router = new Router();

const UserController = require('./controller');
const { postUserValidator } = require('../../validators');

router.get('/:id', UserController.get);
router.get('/:id/notifications', UserController.getNotifications);
router.get(
  '/:id/notifications/:notificationId',
  UserController.getNotification
);
router.post('/', postUserValidator, UserController.post);
router.delete('/:id', UserController.delete);

module.exports = router;
