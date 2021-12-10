const { createConnection } = require('typeorm');

module.exports = () => async (ctx, next) => {
  try {
    console.log(ctx.configs.db);
    await createConnection({
      type: ctx.configs.db.type,
      url: ctx.configs.db.url,
    });
    console.log('Connect to Database.');
    await next();
  } catch (err) {
    console.error('Could not connect to Database.');
    ctx.status = 500;
  }
};
