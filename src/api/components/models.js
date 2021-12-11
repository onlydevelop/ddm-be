const { defineUser } = require('./user/model');
const { defineNotification } = require('./event/model');
const { associateUserNotification } = require('./association');

exports.models = async (sequelize) => {
  // Define models
  const User = await defineUser(sequelize);
  const Notification = await defineNotification(sequelize);

  // Define associations
  associateUserNotification(User, Notification);

  // Sync models
  User.sync();
  Notification.sync();

  return { User, Notification };
};
