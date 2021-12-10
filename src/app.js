// Server
const Koa = require('koa');
const server = new Koa();

// Middlewares
const router = require('./api/routes')();
const configs = require('./api/middleware/configs');
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const db = require('./api/middleware/db');

server.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

server
  .use(json())
  .use(bodyParser())
  .use(configs())
  .use(db())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);
