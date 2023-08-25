const Sequelize = require("sequelize");
const database = require("../db");

const usuarios = database.define("Usuarios", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  nome: Sequelize.STRING,
  email: Sequelize.STRING,
  senha: Sequelize.STRING,
});

module.exports = usuarios;
