'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tarefas', [{
      userid:2,
      nome: 'Pagar enel',
      valor: 120,
      local: 'Nubank',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
   
    return queryInterface.bulkDelete('Tarefas', null, {});
    
  }
};
