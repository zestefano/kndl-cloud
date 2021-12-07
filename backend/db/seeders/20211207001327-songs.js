"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Songs",
      [
        {
          title: "test",
          songUrl: "https://www.mboxdrive.com/Ghetto1.mp3",
          imgUrl:
            "https://i1.sndcdn.com/avatars-02hIRZKrmmSFhs6g-gzJKww-t500x500.jpg",
          description: "test test testing 1 2 3",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "test2",
          songUrl:
            "https://www.mboxdrive.com/Duck%20Quack%20-%20Sound%20Effect%20(HD).mp3",
          imgUrl:
            "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2021/08/rubber-duck-stock-t.jpg",
          description: "quack quack test testing 1 2 3",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "test3",
          songUrl: "https://www.mboxdrive.com/see.mp3",
          imgUrl: "https://media.makeameme.org/created/its-been-a-5bb913.jpg",
          description: "test test testing 4 5 6 ",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
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
   return queryInterface.bulkDelete('Songs', null, {});
  },
};
