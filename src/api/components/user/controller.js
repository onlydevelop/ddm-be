const UserController = {};

UserController.get = async (ctx) => {
  // TODO: Implement
  console.log('Get the user for user ID: ' + ctx.params.id);
  ctx.status = 200;
};

UserController.post = async (ctx) => {
  // TODO: Implement
  const { email, phone } = ctx.request.body;
  console.log('Create the user: ' + JSON.stringify(ctx.request.body));
  ctx.status = 201;
};

UserController.delete = async (ctx) => {
  // TODO: Implement
  console.log('Delete the user with user ID: ' + ctx.params.id);
  ctx.status = 204;
};

module.exports = UserController;
