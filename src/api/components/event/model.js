const { DataTypes } = require('sequelize');

exports.defineEvents = (sequelize) => {
  return sequelize.define('events', {
    // Model attributes are defined here
    emailNotification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    phoneNotification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
};
