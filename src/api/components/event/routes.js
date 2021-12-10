const Router = require('koa-router');
const router = new Router();

const EventController = require('./controller');

router.get('/:id', EventController.get);
router.post('/:userId', EventController.post);

module.exports = router;
