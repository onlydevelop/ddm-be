exports.associateUserEvent = (Users, Events) => {
  Users.hasOne(Events);
  Events.belongsTo(Users);
};
