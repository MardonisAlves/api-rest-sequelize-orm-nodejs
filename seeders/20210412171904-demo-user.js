'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'John',
      sobrenome: 'Doe',
      email: 'example@example.com',
      password: 'jk8yup02@',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mardonis',
      sobrenome: 'Alves',
      email: 'mardonisgp@gmail.com',
      password: 'jk8yup02@',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    
      return  queryInterface.bulkDelete('Users', null, {});
    
  }
};
