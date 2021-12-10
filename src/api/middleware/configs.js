const proc = require('process').env;

module.exports = () => async (ctx, next) => {
  ctx.configs = {
    db: {
      name: proc['DB_NAME'] || 'name',
      user: proc['DB_USER'] || 'user',
      password: proc['DB_PASSWORD'] || '',
      host: proc['DB_HOST'] || 'localhost',
      dialect: proc['DB_DIALECT'] || 'postgres',
      test: proc['DB_TEST'] || false,
    },
  };
  await next();
};
