const { Sequelize } = require('sequelize');
const { models } = require('../components/models');

module.exports = () => async (ctx, next) => {
  try {
    const sequelize = new Sequelize(ctx.configs.db.url);
    await sequelize.authenticate();
    // await sequelize.sync({ force: true });
    console.log('Connected to Database.');

    // Load models
    ctx.db = await models(sequelize);
    ctx.db.sequelize = sequelize;

    await next();
  } catch (err) {
    console.error(err);
    ctx.status = 500;
  }
};
