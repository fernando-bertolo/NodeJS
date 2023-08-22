const Sequelize = require("sequelize");
const database = require("./db");

const usuarios = database.define("Usuarios", {
  nome: Sequelize.STRING,
});

module.exports = usuarios;
