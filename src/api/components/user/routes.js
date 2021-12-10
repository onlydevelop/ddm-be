const Router = require('koa-router');
const router = new Router();

const UserController = require('./controller');

router.get('/:id', UserController.get);
router.post('/', UserController.post);
router.delete('/:id', UserController.delete);

module.exports = router;
