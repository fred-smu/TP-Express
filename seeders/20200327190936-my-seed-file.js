'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('login', [{
      id: `1`,
      firstName: 'John',
      lastName: 'Doe',
      MI: `C`,
      suffix: `III`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 'custinfo', {
      userId: '1',
      address: '153 Youlivehere',
      zipCode: '77755',
      customer_pic: `place holder`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 'password', {
      userId: '1',
      password: 'password1',
      hash: `f4ds5f4sd6f45sd4f5d4f6a4d5f45f4s5f4a65sd4f5asd4f`,
      salt: `IIIf4d5f4as5df4a5sd4f5sd4f56sd4fa56sd4f54sdf6as5`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 'iteminfo', {
      storeName: 'tuff sand wipe',
      itemLable: 'Doe',
      itemLableTwo: `C`,
      price: `12.59`,
      item_pic: `Place Holder`,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkInsert('login', [{
      id: `1`,
      firstName: 'John',
    }
    ], {});
  }
};
