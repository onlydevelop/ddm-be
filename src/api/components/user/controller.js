const UserController = {};

UserController.get = async (ctx) => {
  const user = await ctx.db.User.findOne({
    where: { id: ctx.params.id },
    include: {
      association: ctx.db.User.Notification,
      attributes: ['emailNotification', 'phoneNotification'],
    },
  });

  try {
    if (user) {
      ctx.body = user;
      ctx.status = 200;
    } else {
      ctx.status = 404;
    }
  } catch (error) {
    ctx.status = 500;
  }
};

UserController.getNotifications = async (ctx) => {
  const user = await ctx.db.User.findOne({
    where: { id: ctx.params.id },
    include: {
      association: ctx.db.User.NotificationHistories,
      attributes: ['id', 'emailNotification', 'phoneNotification', 'createdAt'],
    },
  });

  try {
    if (user) {
      ctx.body = user;
      ctx.status = 200;
    } else {
      ctx.status = 404;
    }
  } catch (error) {
    ctx.status = 500;
  }
};

UserController.getNotification = async (ctx) => {
  const user = await ctx.db.User.findOne({
    where: { id: ctx.params.id },
    include: {
      where: { id: ctx.params.notificationId },
      association: ctx.db.User.NotificationHistories,
      attributes: ['id', 'emailNotification', 'phoneNotification', 'createdAt'],
    },
  });

  try {
    if (user) {
      ctx.body = user;
      ctx.status = 200;
    } else {
      ctx.status = 404;
    }
  } catch (error) {
    ctx.status = 500;
  }
};

UserController.post = async (ctx) => {
  const { email, phone } = ctx.request.body;
  try {
    const user = await ctx.db.User.create(
      {
        email,
        phone,
        notification: {
          emailNotification: false,
          phoneNotification: false,
        },
      },
      { include: ctx.db.User.Notification }
    );

    ctx.set('location', `${ctx.request.href}/${user.id}`);
    ctx.status = 201;
  } catch (error) {
    ctx.status = 500;
  }
};

UserController.delete = async (ctx) => {
  const user = await ctx.db.Users.findByPk(ctx.params.id);

  if (user) {
    try {
      await user.destroy();
      ctx.status = 204;
    } catch (error) {
      ctx.status = 500;
    }
  } else {
    ctx.status = 404;
  }
};

module.exports = UserController;
