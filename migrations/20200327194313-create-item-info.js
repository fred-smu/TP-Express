'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('itemInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      storeName: {
        type: Sequelize.STRING
      },
      itemLable: {
        type: Sequelize.STRING
      },
      itemLableTwo: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      item_pic: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('itemInfos');
  }
};