module.exports = () => async (ctx, next) => {
  // TODO: Implement
  console.log('Connect to Database.');
  await next();
};
