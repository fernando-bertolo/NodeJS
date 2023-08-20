const Sequelize = require("sequelize");
const database = require("./db");

const usuarios = database.define('Usuarios', {});

module.exports = usuarios;