`use strict`;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(`custinfos`,[{
        userId: `1`,
        address: `153 Youlivehere`,
        zipCode: `77755`,
        customer_pic: `place holder`,
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
   return queryInterface.bulkInsert(`custinfo`,[{
    userId: `1`,
    address: `153 Youlivehere`
    }
    ], {});
  }
};
