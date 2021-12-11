const { DataTypes } = require('sequelize');

exports.defineUser = (sequelize) => {
  return sequelize.define(
    'user',
    {
      // Model attributes are defined here
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
