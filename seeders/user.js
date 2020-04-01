'use strict';

module.exports = {

  

  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert(`user`,[{
        login: "joe smith",
        password:"asfdfdfdf"
      }]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  
    
    
  },
  // The password cannot be null
  
    
  


  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(`user`,[{
      login: "joe smith",
      password:"asfdfdfdf"
    }]);
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
