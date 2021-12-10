const { DataTypes } = require('sequelize');

exports.defineUsers = (sequelize) => {
  return sequelize.define('users', {
    // Model attributes are defined here
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
