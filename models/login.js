'use strict';
module.exports = (sequelize, DataTypes) => {
  const login = sequelize.define('login', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    MI: {
      allowNull: false,
      type: DataTypes.STRING
    },
    suffix: DataTypes.STRING
  }, {});
  login.associate = function(models) {
    // associations can be defined here
  };
  return login;
};