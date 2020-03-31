`use strict`;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(`iteminfos`, [{
        userId: `1`,
        storeName: `tuff sand wipe`,
        itemLable: `Doe`,
        itemLableTwo: `C`,
        price: `12.59`,
        item_pic: `Place Holder`,
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
   return queryInterface.bulkInsert(`iteminfos`, [{
    userId: `1`,
    storeName: `tuff sand wipe`
    }
    ], {});
  }
};
