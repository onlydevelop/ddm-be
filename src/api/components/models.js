const { defineUser } = require('./user/model');
const {
  defineNotification,
  defineNotificationHistory,
} = require('./event/model');
const {
  associateUserNotification,
  associateUserNotificationHistories,
} = require('./association');

exports.models = async (sequelize) => {
  // Define models
  const User = await defineUser(sequelize);
  const Notification = await defineNotification(sequelize);
  const NotificationHistory = await defineNotificationHistory(sequelize);

  // Define associations
  associateUserNotification(User, Notification);
  associateUserNotificationHistories(User, NotificationHistory);

  // Sync models
  User.sync();
  Notification.sync();
  NotificationHistory.sync();

  return { User, Notification, NotificationHistory };
};
