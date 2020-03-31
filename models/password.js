'use strict';
module.exports = (sequelize, DataTypes) => {
  const password = sequelize.define('password', {
    userId:{
      allowNull: false,
      type: DataTypes.INTEGER
    },
    password:{
      allowNull: false,
      type: DataTypes.STRING
    },
    
    salt:{
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {});
  password.associate = function(models) {
    // associations can be defined here
  };
  return password;
};