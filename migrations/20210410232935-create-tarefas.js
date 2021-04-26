'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tarefas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Users',
          key:'id'
        }
      },
      nome: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.DOUBLE
      },
      local: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue:0
      }
      ,
      data: {
        type: Sequelize.DATE
      }
      ,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tarefas');
  }
};