const EventController = {};

EventController.get = async (ctx) => {
  // TODO: Implement
  console.log('Get the Event for event ID: ' + ctx.params.id);
  ctx.status = 200;
};

EventController.post = async (ctx) => {
  // TODO: Implement
  const userId = ctx.params.userId;
  const { email, phone } = ctx.request.body;
  console.log(
    'Create the Event for userId[' +
      userId +
      ']: ' +
      JSON.stringify(ctx.request.body)
  );
  ctx.status = 201;
};

module.exports = EventController;
