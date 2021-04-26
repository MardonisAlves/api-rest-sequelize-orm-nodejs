'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tarefas', [{
      userid:1,
      nome: 'Pagar enel',
      valor: 120,
      local: 'Nubank',
      status: 0,
      data: '2021-05-12',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
   
    return queryInterface.bulkDelete('Tarefas', null, {});
    
  }
};
