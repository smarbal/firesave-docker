'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Proms', [{ name: 'SDIV', battalion: 'ASEA' }], {});
      await queryInterface.bulkInsert('Users', [{ lastname: 'Ad',firstname: 'min', username : 'admin', service_number: 0000000, room: '0k00', password: '$2a$05$AFd/26M0Yd8yLc45HpY1Y.sPJGit9xErj9eA6M1qTVyW2/pdhlIUa', isAdmin: true }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
