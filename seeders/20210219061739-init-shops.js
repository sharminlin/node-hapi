'use strict';
const { TABLE_SHOPS } = require('../constant/tables')

const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(TABLE_SHOPS, [
      { id: 1, name: '店铺1', thumb_url: '1.png', ...timestamps },
      { id: 2, name: '店铺2', thumb_url: '2.png', ...timestamps },
      { id: 3, name: '店铺3', thumb_url: '3.png', ...timestamps },
      { id: 4, name: '店铺4', thumb_url: '4.png', ...timestamps },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(TABLE_SHOPS, {
      id: {
        [Sequelize.Op.in]: [1, 2, 3, 4]
      }
    }, {});
  }
};
