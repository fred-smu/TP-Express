`use strict`;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(`login`, [{
      
      loginName: `ohboy`,
      firstName: `John`,
      lastName: `Doe`,
      MI: `C`,
      suffix: `III`,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete(`People`, null, {});
    */
    return queryInterface.bulkInsert(`login`, [{
      
      firstName: `John`,
    }
    ], {});
  }
};
