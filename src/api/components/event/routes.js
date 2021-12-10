const Router = require('koa-router');
const router = new Router();

const EventController = require('./controller');
const { postEventValidator } = require('../../validators');

router.get('/:id', EventController.get);
router.post('/:userId', postEventValidator, EventController.post);

module.exports = router;
