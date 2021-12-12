exports.associateUserNotification = (User, Notification) => {
  User.Notification = User.hasOne(Notification, {
    as: 'notification',
  });
};

exports.associateUserNotificationHistories = (User, NotificationHistory) => {
  User.NotificationHistories = User.hasMany(NotificationHistory, {
    as: 'notificationHistories',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  });
};
