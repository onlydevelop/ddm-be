const EventController = {};

EventController.post = async (ctx) => {
  const userId = ctx.params.userId;
  const { emailNotification, phoneNotification } = ctx.request.body;
  const { sequelize, User, Notification, NotificationHistory } = ctx.db;

  let user;
  try {
    user = await User.findOne({
      where: { id: userId },
      include: [
        {
          model: Notification,
          as: 'notification',
        },
      ],
    });
    if (!user) {
      ctx.status = 404;
      return;
    }
  } catch (error) {
    console.error(error);
    ctx.body = error;
    ctx.status = 500;
    return;
  }

  const t = await sequelize.transaction();
  const updateAttributes = {};
  try {
    if (emailNotification !== undefined) {
      user.notification.emailNotification = emailNotification;
    }

    if (phoneNotification !== undefined) {
      user.notification.phoneNotification = phoneNotification;
    }

    // Transaction: Begin
    await NotificationHistory.create(
      {
        userId,
        emailNotification,
        phoneNotification,
      },
      { transaction: t }
    );

    await user.notification.save({
      transaction: t,
    });
    // Transaction: End

    await t.commit();

    ctx.set('location', `${ctx.request.href}/${user.id}`);
    ctx.status = 201;
  } catch (error) {
    await t.rollback();
    console.log(error);
    ctx.body = error;
    ctx.status = 500;
  }
};

module.exports = EventController;
