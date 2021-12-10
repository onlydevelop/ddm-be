const Router = require('koa-router');
const router = new Router();

const UserController = require('./controller');
const { postUserValidator } = require('../../validators');

router.get('/:id', UserController.get);
router.post('/', postUserValidator, UserController.post);
router.delete('/:id', UserController.delete);

module.exports = router;
