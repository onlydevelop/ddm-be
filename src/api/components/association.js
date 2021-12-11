exports.associateUserNotification = (User, Notification) => {
  User.Notification = User.hasOne(Notification, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  });
};
