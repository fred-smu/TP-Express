'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert(`user`,[{
        login: "joe smith",
        password:"asfdfdfdf"
      }]);
 },

  // },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(`user`,[{
      login: "joe smith",
      password:"asfdfdfdf"
    }]);
 
  }
};
