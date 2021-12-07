'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        comment: 'i love this song',
        userId: 1,
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: 'i love this song also',
        userId: 1,
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: 'i love this song too',
        userId: 1,
        songId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
