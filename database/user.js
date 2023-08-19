const Sequelize = require("sequelize");
const database = require("./db");

const usuario = database.define('teste', {});

module.exports = usuario;