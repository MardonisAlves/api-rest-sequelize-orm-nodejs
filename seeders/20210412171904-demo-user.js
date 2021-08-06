'use strict';
const bcrypt = require('bcrypt')
const saltRounds = 10;
const password = bcrypt.hashSync('jk8yup02@', saltRounds)

module.exports = {up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      name: 'Mardonis',
      sobrenome: 'Alves',
      email: 'admin@gmail.com',
      password: password,
      typeuser:'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
      return  queryInterface.bulkDelete('Users', null, {});
  }
};
