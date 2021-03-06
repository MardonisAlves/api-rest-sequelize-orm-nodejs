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
      UserId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        defaultValue:0,
        references:{
          model:'Users',
          key:'id'
        },
        onDelete:'CASCADE'
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
        type: Sequelize.REAL,
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