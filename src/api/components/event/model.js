const { DataTypes } = require('sequelize');

exports.defineNotification = (sequelize) => {
  return sequelize.define(
    'notification',
    {
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

exports.defineNotificationHistory = (sequelize) => {
  return sequelize.define(
    'notificationHistory',
    {
      userId: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      emailNotification: {
        type: DataTypes.BOOLEAN,
      },
      phoneNotification: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      timestamps: true,
      updatedAt: false,
    }
  );
};
