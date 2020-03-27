'use strict';
module.exports = (sequelize, DataTypes) => {
  const itemInfo = sequelize.define('itemInfo', {
    userId: DataTypes.INTEGER,
    storeName: DataTypes.STRING,
    itemLable: DataTypes.STRING,
    itemLableTwo: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    item_pic: DataTypes.STRING
  }, {});
  itemInfo.associate = function(models) {
    // associations can be defined here
  };
  return itemInfo;
};