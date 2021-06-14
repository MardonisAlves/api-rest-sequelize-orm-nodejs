'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarefas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
  
      this.belongsTo(models.Users ,{
        foreignKey:'userid',
        as:'users'
      })
     
    }
  };
  Tarefas.init({
    nome: DataTypes.STRING,
    valor: DataTypes.DECIMAL,
    local: DataTypes.STRING,
    data:DataTypes.DATE,
    status:DataTypes.REAL

  }, {
    sequelize,
    modelName: 'Tarefas',
  });
  return Tarefas;
};