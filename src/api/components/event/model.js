const { DataTypes } = require('sequelize');

exports.defineNotification = (sequelize) => {
  return sequelize.define(
    'notification',
    {
      // Model attributes are defined here
      emailNotification: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      phoneNotification: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
