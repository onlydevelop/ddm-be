const UserController = {};

UserController.get = async (ctx) => {
  const user = await ctx.db.Users.findByPk(ctx.params.id);
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
    const item = await ctx.db.Users.create({ email, phone });
    ctx.set('location', `${ctx.request.href}/${item.id}`);
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
