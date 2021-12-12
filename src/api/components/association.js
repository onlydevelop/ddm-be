exports.associateUserNotification = (User, Notification) => {
  User.Notification = User.hasOne(Notification, {
    as: 'notification',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  });
};
