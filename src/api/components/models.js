const { defineUsers } = require('./user/model');
const { defineEvents } = require('./event/model');
const { associateUserEvent } = require('./association');

exports.models = async (sequelize) => {
  // Define models
  const Users = await defineUsers(sequelize);
  Users.sync();
  const Events = await defineEvents(sequelize);
  Events.sync();

  // Define assocuations
  await associateUserEvent(Users, Events);

  return { Users, Events };
};
