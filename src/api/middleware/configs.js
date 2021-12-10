const proc = require('process').env;

module.exports = () => async (ctx, next) => {
  ctx.configs = {
    db: {
      type: proc['DB_TYPE'] || 'postgres',
      url: proc['DB_URL'] || 'postgresql://test:test@localhost/test',
    },
  };
  await next();
};
