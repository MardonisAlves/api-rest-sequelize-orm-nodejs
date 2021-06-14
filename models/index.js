'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env =  'production';
console.log(env)
const config = require(__dirname + '/../config/config.json')[env];
//const config = require(__dirname + '/../config/env')
console.log(config)
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    'postgres://fbnhicgjjdxegf:26b63e12d27730401cab6ddca89fbb979a98aebca892c6d70fcc6d2223323d61@ec2-3-214-136-47.compute-1.amazonaws.com:5432/d6kki66bd8l4cr', 
    {dialect: 'postgres'});
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
